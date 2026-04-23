import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BlogModule } from './blog/blog.module';

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [BlogModule]
})
export class AppModule {}