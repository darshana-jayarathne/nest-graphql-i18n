import { Module, forwardRef } from '@nestjs/common';
import { i18nResolver } from './i18n.resolver';
import { i18nService } from './i18n.service';

@Module({
  imports: [],
  providers: [i18nResolver, i18nService],
  controllers: [],
  exports: [],
})
export class i18nModule {}
