import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from './guards/ensure-module-loaded-once-guard.guard';
import { ClientService } from './services/client.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [ClientService],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
