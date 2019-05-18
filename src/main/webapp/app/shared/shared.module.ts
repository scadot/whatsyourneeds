import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WhatsyourneedsSharedLibsModule, WhatsyourneedsSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [WhatsyourneedsSharedLibsModule, WhatsyourneedsSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [WhatsyourneedsSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WhatsyourneedsSharedModule {
  static forRoot() {
    return {
      ngModule: WhatsyourneedsSharedModule
    };
  }
}
