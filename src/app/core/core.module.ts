import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from './guards/ensure-module-loaded-once-guard.guard';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
