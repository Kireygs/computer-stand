import { Component } from '@angular/core';

import { BuildPage } from '../build/build';
import { InfoPage } from '../info/info';
import { VideoPage } from '../video/video';
import { AuthorPage } from '../author/author';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BuildPage;
  tab2Root = VideoPage;
  tab3Root = InfoPage;
  tab4Root = AuthorPage;

  constructor() {

  }
}
