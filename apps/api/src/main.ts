import { Global } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import GlobalConstants from './common/global.constants';

async function bootstrap(globalConstants: GlobalConstants) {
    const app = await NestFactory.create(AppModule);
    app.enableCors();

    const config = new DocumentBuilder()
        .setTitle(globalConstants.environment.apiTitle)
        .setDescription(globalConstants.environment.apiDescription)
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(globalConstants.environment.apiPort);
}

const globalConstants = new GlobalConstants();
bootstrap(globalConstants);
