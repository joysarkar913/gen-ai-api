import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(private readonly configService: ConfigService) {}

  async getHello(promptText: string,requestFor:string): Promise<string> {
    if(promptText===""){
      return "error";
    }else{    const apiKey = 'AIzaSyDUnTlyxfVS90thhXcRp69s7EC_WqmDb20';
 
    const payload = {
      contents: [
        {
          parts: [{ text: promptText }],
        },
      ],
    };
      if(requestFor==="questions"){

    try {
      
    const url = `https://generativelanguage.googleapis.com/v1beta/models/antigravity-preview-05-2026:generateContent?key=${apiKey}`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`API error (${response.status}): ${errText}`);
      }

      const data = await response.json();
      return (
        data.candidates?.[0]?.content?.parts?.[0]?.text ?? 'No text generated.'
      );
    } catch (error) {
      this.logger.error('failed', error);
      throw new InternalServerErrorException('Failed to generate content');
    }

      }else{


    try {
      
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`API error (${response.status}): ${errText}`);
      }

      const data = await response.json();
      return (
        data.candidates?.[0]?.content?.parts?.[0]?.text ?? 'No text generated.'
      );
    } catch (error) {
      this.logger.error('failed', error);
      throw new InternalServerErrorException('Failed to generate content');
    }
  }}
}}