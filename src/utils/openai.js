import OpenAI from 'openai';
import { OPENAI_GPTKEY } from './constants';

const openai = new OpenAI({
  apiKey: OPENAI_GPTKEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default openai;