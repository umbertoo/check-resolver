import { NestFactory } from "@nestjs/core";
import { AppModule, SYMBOL_TOKEN, STRING_TOKEN } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  try {
    const factoryProviderWithSymbolToken = await app.resolve(SYMBOL_TOKEN);
  } catch (error) {
    console.log('factory provider with SYMBOL_TOKEN', error);
  }
  try {
    const factoryProviderWithStringToken = await app.resolve(STRING_TOKEN);
  } catch (error) {
    console.log('factory provider with STRING_TOKEN', error);
  }
}
bootstrap();
