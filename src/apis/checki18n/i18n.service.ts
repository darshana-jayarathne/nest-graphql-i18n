import { Injectable } from '@nestjs/common';
import { I18nContext, I18nService } from 'nestjs-i18n';


@Injectable()
export class i18nService {
  constructor(private readonly i18n: I18nService) {}
  getHello(): string {
    return this.i18n.t('test.PRODUCT.NEW',{ lang:   I18nContext.current().lang });
  }
}