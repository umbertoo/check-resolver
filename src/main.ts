import { NestFactory } from "@nestjs/core";
import { AppModule, SYMBOL_TOKEN, STRING_TOKEN } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  try {
    const factoryProviderWithToken = await app.resolve(SYMBOL_TOKEN);
  } catch (error) {
    console.log('factoryProviderWithToken', error);
  }
  try {
    const factoryProviderWithString = await app.resolve(STRING_TOKEN);
  } catch (error) {
    console.log('factoryProviderWithString', error);
  }
}
bootstrap();
