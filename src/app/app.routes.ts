import { Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { WhychooseusComponent } from './whychooseus/whychooseus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
    {path:'PRODUCTS',component:ProductsComponent},
    {path:'WHYCHOOSEUS',component:WhychooseusComponent},
    {path:'CONTACTUS',component:ContactusComponent},
    {path:'ABOUTUS',component:AboutUsComponent}
];
