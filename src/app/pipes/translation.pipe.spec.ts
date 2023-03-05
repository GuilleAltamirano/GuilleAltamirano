import { TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationPipe } from './translation.pipe';

describe('TranslationPipe', () => {
  let pipe: TranslationPipe;
  let translate: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
      ],
      providers: [
        TranslateService,
      ],
    });

    translate = TestBed.inject(TranslateService);
    pipe = new TranslationPipe(translate);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});

