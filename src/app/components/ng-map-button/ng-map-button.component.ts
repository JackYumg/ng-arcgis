import {
  AfterContentInit, AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  Input, OnChanges, OnDestroy,
  OnInit,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import {Subject} from "rxjs";

export type NzButtonType = 'primary' | 'dashed' | 'danger' | 'link' | null;
export type NzButtonShape = 'circle' | 'round' | null;
export type NzButtonSize = 'large' | 'default' | 'small';

@Component({
  selector: 'button[ngMap-button], a[ngMap-button]',
  templateUrl: './ng-map-button.component.html',
  styleUrls: ['./ng-map-button.component.less'],
  host: {
    '[class.ngMap-btn]': `true`,
    '[class.ngMap-btn-primary]': `nzType === 'primary'`,
    '[class.ngMap-btn-dashed]': `nzType === 'dashed'`,
    '[class.ngMap-btn-link]': `nzType === 'link'`,
    '[class.ngMap-btn-danger]': `nzType === 'danger'`,
    '[class.ngMap-btn-circle]': `nzShape === 'circle'`,
    '[class.ngMap-btn-round]': `nzShape === 'round'`,
    '[class.ngMap-btn-lg]': `nzSize === 'large'`,
    '[class.ngMap-btn-sm]': `nzSize === 'small'`,
    '[class.ngMap-btn-dangerous]': `nzDanger`,
    '[class.ngMap-btn-loading]': `nzLoading`,
    '[class.ngMap-btn-background-ghost]': `nzGhost`,
    '[class.ngMap-btn-block]': `nzBlock`,
    '[class.ngMap-input-search-button]': `nzSearch`
  }
})
export class NgMapButtonComponent implements OnDestroy, OnChanges, AfterViewInit, AfterContentInit {
  @Input() nzType: NzButtonType = null;
  @Input() nzShape: NzButtonShape = null;
  private destroy$ = new Subject<void>();
  private loading$ = new Subject<boolean>();
  @Input() nzLoading: boolean = false;
  @Input() nzSize: NzButtonSize = 'default';

  @Input() nzDanger: boolean = false;
  @Input() nzGhost: boolean = false;
  @Input() nzBlock: boolean = false;
  @Input() nzSearch: boolean = false;

  insertSpan(nodes: NodeList, renderer: Renderer2): void {
    nodes.forEach(node => {
      if (node.nodeName === '#text') {
        const span = renderer.createElement('span');
        const parent = renderer.parentNode(node);
        renderer.insertBefore(parent, span, node);
        renderer.appendChild(span, node);
      }
    });
  }

  constructor(
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
  ) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    const {nzLoading} = changes;
    if (nzLoading) {
      this.loading$.next(this.nzLoading);
    }
  }

  ngAfterViewInit(): void {
    this.insertSpan(this.elementRef.nativeElement.childNodes, this.renderer);
  }

  ngAfterContentInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
