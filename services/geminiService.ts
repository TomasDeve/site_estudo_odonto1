import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || ''; 
// Note: In a real production app, ensure API_KEY is defined. 
// If not, the chat component handles the error gracefully.

const ai = new GoogleGenAI({ apiKey });

export const sendChatMessage = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    if (!apiKey) {
      // Fallback if no key is present for demo purposes
      return "Olá! O sistema de chat está em modo de demonstração (sem chave API configurada). Como posso ajudar você a agendar uma consulta hoje?";
    }

    // Context for the AI to act as a dental receptionist
    const systemInstruction = `
      Você é a 'Lumi', a assistente virtual inteligente da Lumina Odontologia.
      Sua persona é acolhedora, profissional, empática e eficiente.
      
      Seus objetivos:
      1. Tirar dúvidas sobre tratamentos (Clareamento, Implantes, Invisalign, Limpeza).
      2. Incentivar o agendamento de consultas.
      3. Fornecer informações básicas de contato se solicitado (Endereço: Av. Paulista, 1000 - SP).
      
      Regras:
      - Responda de forma concisa e amigável.
      - Use emojis ocasionalmente para parecer mais humano 😊.
      - Se o usuário quiser agendar, peça o nome e telefone ou direcione para o botão de WhatsApp no site.
      - Não invente preços específicos, diga "Valores variam conforme avaliação, agende sua visita!".
    `;

    // Convert history to Gemini format if using chat session, 
    // but for simplicity in this stateless service wrapper, we'll just use generateContent with context
    // or a fresh chat session. Ideally, use `ai.chats.create`.
    
    // Let's use a simple generateContent approach with history context formatted as text for this specific stateless request pattern,
    // OR better, use the Chat API properly if we were maintaining state in the service. 
    // Since state is in React, let's create a new chat context each time or just pass the prompt.
    // For a robust implementation, we will use ai.models.generateContent with the system instruction and the full conversation so far.

    const conversationHistory = history.map(h => `${h.role === 'user' ? 'Paciente' : 'Lumi'}: ${h.text}`).join('\n');
    const fullPrompt = `${systemInstruction}\n\nHistórico da conversa:\n${conversationHistory}\nPaciente: ${message}\nLumi:`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: fullPrompt, 
      config: {
        maxOutputTokens: 300,
        temperature: 0.7,
      }
    });

    return response.text || "Desculpe, não consegui processar sua resposta no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Desculpe, estamos com uma alta demanda no momento. Por favor, tente novamente em alguns instantes ou use nosso WhatsApp.";
  }
};