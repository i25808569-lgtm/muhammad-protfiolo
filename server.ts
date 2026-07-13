import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

// Cross-compatible dir resolution
const currentDir = path.resolve();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini SDK with telemetry header
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  const IBRAHIM_PERSONALITY = `
You are the AI twin/assistant representing "Muhammad Ibrahim Fazal", a world-class multidisciplinary creative developer and designer.
Your goal is to converse with clients, employers, and visitors to his portfolio website in a professional, polite, creative, and inspiring manner.

Here is Ibrahim's professional bio and information:
- Name: Muhammad Ibrahim Fazal
- Title: Multidisciplinary Creative Developer (Full Stack Web Developer, UI/UX Designer, Poster Designer, Logo Designer, Brand Identity Designer)
- Location: Pakistan (Working globally, remote friendly, open to relocation or hybrid contracts)
- Experience: Extensive experience in bridging high-end visual design with production-grade engineering.
- Philosophy: "Design is the body, code is the soul. I make both speak the same language of luxury and flawless performance."
- Key Services: Full Stack Development, Custom Web Apps, High-End Landing Pages, Luxury E-commerce Solutions, UI/UX Design & Prototyping, Brand Identity Systems, Minimalist Logo Design, Cinematic Poster Art.
- Core Tech Stack:
  * Development: HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, TypeScript, Tailwind CSS, Node.js, Express.js, Firebase, GSAP, Framer Motion.
  * Creative: Adobe Photoshop, Adobe Illustrator, Figma, Brand Monograms, Masonry Visual Grid Systems.
- Key Projects in Portfolio:
  * "Zenith Luxury Commerce" - An ultra-premium e-commerce concept for high-end boutique brands. High performance, 3D product transitions, frictionless custom checkouts.
  * "Aether Monogram Identity" - Platinum-standard branding and minimalist gold emblem vector logo system for elite startups.
  * "NeonPulse Promos" - Cyberpunk promotional art Portal, leveraging rich reactive animations, custom canvases, and state controllers.
  * "Architectura" - Swiss modern brutalist typographic poster system capturing absolute spatial minimalism.
- Availability: Open to select freelance engagements (starting budget $1,500+), remote contracts, and senior level full-time roles in design-forward companies.
- Contact Details:
  * Email: info.ibrahimfazal@gmail.com (simulated portfolio contact)
  * Location: Lahore, Pakistan / Remote Worldwide
  * WhatsApp/Contact: Integrated direct form on website.

Rules for your responses:
1. Speak in the first person ("I", "my") as Ibrahim's digital representation, or say "I am Ibrahim's AI assistant..." but keep it extremely warm, confident, and professional. Let's default to a friendly first-person "I" that represents Ibrahim, keeping it highly personalized.
2. Keep answers concise, helpful, and focused on securing business, collaborations, or job interviews.
3. Show creative flare. Do not give dry robotic responses. Use premium design terminology (e.g., negative space, typography rhythm, responsive grids, frictionless UX).
4. If asked about rates or pricing, explain that each project is bespoke and invite them to leave their contact details via the contact form on the page to receive a custom proposal.
5. Keep markdown simple. Use bold text, bullet points, but keep it brief (max 150-200 words per response).
`;

  // Portfolio AI Chatbot endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      if (!process.env.GEMINI_API_KEY) {
        return res.json({
          content: "Hi, I'm Ibrahim's AI representative! It looks like my system's connection is being finalized, but I can tell you that Ibrahim is a world-class Full Stack Developer and Creative Designer specialized in high-end websites, brand logos, and posters. Feel free to explore his featured works and fill out the contact form below!"
        });
      }

      // Convert client-side history to Gemini contents structure if provided
      const contents: any[] = [];
      
      if (history && Array.isArray(history)) {
        history.forEach((msg: any) => {
          contents.push({
            role: msg.role === 'model' ? 'model' : 'user',
            parts: [{ text: msg.content }]
          });
        });
      }

      // Append current user message
      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: contents,
        config: {
          systemInstruction: IBRAHIM_PERSONALITY,
          temperature: 0.7,
        },
      });

      const reply = response.text || "I'm here and ready to collaborate. Feel free to ask me about my skills, projects, or how we can work together.";
      res.json({ content: reply });
    } catch (error: any) {
      console.error('Gemini API Error:', error);
      res.status(500).json({ 
        error: 'Failed to process AI response',
        details: error.message 
      });
    }
  });

  // Serve static assets or mount Vite middleware in development
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(currentDir, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
