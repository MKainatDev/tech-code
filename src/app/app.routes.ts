import { Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { WhychooseusComponent } from './whychooseus/whychooseus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
    {path:'pruducts',component:ProductsComponent},
    {path:'whychooseus',component:WhychooseusComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'aboutus',component:AboutUsComponent}
];
