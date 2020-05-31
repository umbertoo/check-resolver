import { Module } from "@nestjs/common";

export const SYMBOL_TOKEN = Symbol();
export const STRING_TOKEN = 'STRING_TOKEN';

@Module({
  imports: [],
  providers: [
    {
      provide: SYMBOL_TOKEN,
      useFactory(){ return { name: 'factory provider with SYMBOL TOKEN'} }
    },
    {
      provide: STRING_TOKEN,
      useFactory(){ return { name: 'factory provider with STRING TOKEN'} }
    },
  ],
})
export class AppModule {}
