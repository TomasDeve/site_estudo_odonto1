import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendChatMessage = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
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

    const conversationHistory = history.map(h => `${h.role === 'user' ? 'Paciente' : 'Lumi'}: ${h.text}`).join('\n');
    const fullPrompt = `Histórico da conversa:\n${conversationHistory}\nPaciente: ${message}\nLumi:`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: fullPrompt, 
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "Desculpe, não consegui processar sua resposta no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Desculpe, estamos com uma alta demanda no momento. Por favor, tente novamente em alguns instantes ou use nosso WhatsApp.";
  }
};