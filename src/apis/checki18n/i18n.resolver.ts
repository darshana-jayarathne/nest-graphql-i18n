import { Query, Resolver } from '@nestjs/graphql';
import { i18nService } from './i18n.service';

@Resolver()
export class i18nResolver {
  constructor(
    private i18nService: i18nService,
  ) {}
  @Query(() => String)
  async i18n(): Promise<String> {
    return await this.i18nService.getHello();
  }
}
