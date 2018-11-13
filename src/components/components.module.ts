import { NgModule } from '@angular/core';
import { AComponent } from './a/a';
import { TestComponent } from './test/test';
@NgModule({
	declarations: [AComponent,
    TestComponent],
	imports: [],
	exports: [AComponent,
    TestComponent]
})
export class ComponentsModule {}
