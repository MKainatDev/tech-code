import { Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { WhychooseusComponent } from './whychooseus/whychooseus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { CataloguerequestComponent } from './cataloguerequest/cataloguerequest.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'products',component:ProductsComponent},
    {path:'whychooseus',component:WhychooseusComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'aboutus',component:AboutUsComponent},
    {path:'cataloguerequest',component:CataloguerequestComponent},
    {path:'contact-us',component:ContactusComponent}
];