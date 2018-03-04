import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ProjectLite, Categories, ProjectImage } from '../shared/model';
import { ProjectFilterService } from '../shared/project-filter.service'
import PhotoSwipe from 'photoswipe';
import { ProjectDetailPageData } from './project-detail-page.data';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})

export class ProjectDetailComponent implements OnInit {
  supportWebP: boolean;
  project: ProjectLite;
  popupImages: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private projectFilterService: ProjectFilterService,
    private title: Title,
    private meta: Meta) {
  }

  private setMetaTags() {
    // sets the title.
    this.title.setTitle(`Emily Chen | Graphic Design | ${this.project.englishName} | ${this.project.chineseName}`);

    // generate some meaningful description
    this.meta.updateTag({
      content: this.project.about
    },
      "property='og:description'"
    )

    // sets thumbnail.
    this.meta.updateTag({
      content: this.project.images[0].url
    },
      "property='og:image'"
    )

    this.meta.updateTag({
      content: this.project.images[0].url
    },
      "property='og:image:url'"
    )

    this.meta.updateTag({content: this.project.images[0].height.toString()},
      "property='og:image:height'"
    )

    this.meta.updateTag({content: this.project.images[0].width.toString()},
      "property='og:image:width'"
    )
    
  }

  ngOnInit() {
    this.supportWebP = !window || (<any>window).supportsWebP === true
    this.projectFilterService.filter(NaN);

    let pageData: ProjectDetailPageData = this.route.snapshot.data['pageData'];
    this.project = {
      about: pageData.data.fields.about["en-US"],
      name: pageData.data.fields.folderName["en-US"],
      descriptions: pageData.data.fields.partners["en-US"],
      chineseName: pageData.data.fields.name["zh"],
      englishName: pageData.data.fields.name["en-US"],
      categories: pageData.data.fields.categories["en-US"].map(category => {
        return Categories[category.fields.name["en-US"]];
      }),
      images: pageData.data.fields.images["en-US"].map(img => {
        return {
          url: img.fields.file["en-US"].url,
          width: img.fields.file["en-US"].details.image.width,
          height: img.fields.file["en-US"].details.image.height,
          title: img.fields.title["en-US"],
          fileName: img.fields.file["en-US"].fileName
        }
      })
    }

    if (pageData.data.fields.youtube) {
      this.project.youtube = pageData.data.fields.youtube["en-US"];
    }

    if (pageData.data.fields.websiteUrl) {
      this.project.link = pageData.data.fields.websiteUrl["en-US"];
    }
    
    for (const img of this.project.images) {
      this.popupImages.push({
        src: this.detailImage(img),
        w: img.width,
        h: img.height,
        title: img.title
      });
    }

    this.setMetaTags();
  }

  public compressedDetailImage(projectImg: ProjectImage): string {
    let fileNamePrefix = projectImg.fileName.split('.')[0];
    if (this.supportWebP) {
      return `${environment.assetUrl}/assets/projects/${this.project.name}/compressed/${fileNamePrefix}.webp`;
    }
    else {
      return `${environment.assetUrl}/assets/projects/${this.project.name}/compressed/${fileNamePrefix}.png`;
    }
  }

  public detailImage(projectImg: ProjectImage): string {
    if (this.supportWebP) {
      let fileNamePrefix = projectImg.fileName.split('.')[0];
      return `${environment.assetUrl}/assets/projects/${this.project.name}/${fileNamePrefix}.webp`;
    }
    else {
      return projectImg.url;
    }
  }

  openImagePopUp(imgIndex: number) {
    let pswpElement = document.querySelectorAll('.pswp')[0];

    // define options (if needed)
    let options = {
      index: imgIndex
    };

    // Initializes and opens PhotoSwipe
    let gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, this.popupImages, options);
    gallery.init();
  }

  public onlazyImgLoad(index: number) {
    if (!document) {
      return;
    }
    
    let img: HTMLElement = document.getElementById(`project-detail-img-${index}`);
    if (img && img.classList.contains('blur-image')) {
      img.classList.remove('blur-image');
      img.classList.add('clear-image');
    }
  }

  public onDetailImgClicked(projectDetail: string) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Project Detail Image',
      eventAction: 'View',
      eventLabel: `Project [${this.project.chineseName}] - ${projectDetail} Viewed`
    });
  }
}

interface Document {
  ALLOW_KEYBOARD_INPUT: any;
}

let PhotoSwipeUI_Default =
  function (pswp, framework) {

    let ui = this;
    let _overlayUIUpdated = false,
      _controlsVisible = true,
      _fullscrenAPI,
      _controls,
      _captionContainer,
      _fakeCaptionContainer,
      _indexIndicator,
      _shareButton,
      _shareModal,
      _shareModalHidden = true,
      _initalCloseOnScrollValue,
      _isIdle,
      _listen,

      _loadingIndicator,
      _loadingIndicatorHidden,
      _loadingIndicatorTimeout,

      _galleryHasOneSlide,

      _options,
      _defaultUIOptions = {
        barsSize: { top: 44, bottom: 'auto' },
        closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
        timeToIdle: 4000,
        timeToIdleOutside: 1000,
        loadingIndicatorDelay: 1000, // 2s

        addCaptionHTMLFn: function (item, captionEl /*, isFake */) {
          if (!item.title) {
            captionEl.children[0].innerHTML = '';
            return false;
          }
          captionEl.children[0].innerHTML = item.title;
          return true;
        },

        closeEl: true,
        captionEl: true,
        fullscreenEl: true,
        zoomEl: true,
        shareEl: true,
        counterEl: true,
        arrowEl: true,
        preloaderEl: true,

        tapToClose: false,
        tapToToggleControls: true,

        clickToCloseNonZoomable: true,

        shareButtons: [
          { id: 'facebook', label: 'Share on Facebook', url: 'https://www.facebook.com/sharer/sharer.php?u={{url}}' },
          { id: 'twitter', label: 'Tweet', url: 'https://twitter.com/intent/tweet?text={{text}}&url={{url}}' },
          {
            id: 'pinterest', label: 'Pin it', url: 'http://www.pinterest.com/pin/create/button/' +
              '?url={{url}}&media={{image_url}}&description={{text}}'
          },
          { id: 'download', label: 'Download image', url: '{{raw_image_url}}', download: true }
        ],
        getImageURLForShare: function ( /* shareButtonData */) {
          return pswp.currItem.src || '';
        },
        getPageURLForShare: function ( /* shareButtonData */) {
          return window.location.href;
        },
        getTextForShare: function ( /* shareButtonData */) {
          return pswp.currItem.title || '';
        },

        indexIndicatorSep: ' / ',
        fitControlsWidth: 1200

      },
      _blockControlsTap,
      _blockControlsTapTimeout;



    let _onControlsTap = function (e) {
      if (_blockControlsTap) {
        return true;
      }


      e = e || window.event;

      if (_options.timeToIdle && _options.mouseUsed && !_isIdle) {
        // reset idle timer
        _onIdleMouseMove();
      }


      let target = e.target || e.srcElement,
        uiElement,
        clickedClass = target.getAttribute('class') || '',
        found;

      for (let i = 0; i < _uiElements.length; i++) {
        uiElement = _uiElements[i];
        if (uiElement.onTap && clickedClass.indexOf('pswp__' + uiElement.name) > -1) {
          uiElement.onTap();
          found = true;

        }
      }

      if (found) {
        if (e.stopPropagation) {
          e.stopPropagation();
        }
        _blockControlsTap = true;

        // Some versions of Android don't prevent ghost click event
        // when preventDefault() was called on touchstart and/or touchend.
        //
        // This happens on v4.3, 4.2, 4.1,
        // older versions strangely work correctly,
        // but just in case we add delay on all of them)
        let tapDelay = framework.features.isOldAndroid ? 600 : 30;
        _blockControlsTapTimeout = setTimeout(function () {
          _blockControlsTap = false;
        }, tapDelay);
      }

    },
      _fitControlsInViewport = function () {
        return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
      },
      _togglePswpClass = function (el, cName, add) {
        framework[(add ? 'add' : 'remove') + 'Class'](el, 'pswp__' + cName);
      },

      // add class when there is just one item in the gallery
      // (by default it hides left/right arrows and 1ofX counter)
      _countNumItems = function () {
        let hasOneSlide = (_options.getNumItemsFn() === 1);

        if (hasOneSlide !== _galleryHasOneSlide) {
          _togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);
          _galleryHasOneSlide = hasOneSlide;
        }
      },
      _toggleShareModalClass = function () {
        _togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
      },
      _toggleShareModal = function () {

        _shareModalHidden = !_shareModalHidden;


        if (!_shareModalHidden) {
          _toggleShareModalClass();
          setTimeout(function () {
            if (!_shareModalHidden) {
              framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
            }
          }, 30);
        } else {
          framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
          setTimeout(function () {
            if (_shareModalHidden) {
              _toggleShareModalClass();
            }
          }, 300);
        }

        if (!_shareModalHidden) {
          _updateShareURLs();
        }
        return false;
      },

      _openWindowPopup = function (e) {
        e = e || window.event;
        let target = e.target || e.srcElement;

        pswp.shout('shareLinkClick', e, target);

        if (!target.href) {
          return false;
        }

        if (target.hasAttribute('download')) {
          return true;
        }

        window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,' +
          'location=yes,width=550,height=420,top=100,left=' +
          (window.screen ? Math.round(screen.width / 2 - 275) : 100));

        if (!_shareModalHidden) {
          _toggleShareModal();
        }

        return false;
      },
      _updateShareURLs = function () {
        let shareButtonOut = '',
          shareButtonData,
          shareURL,
          image_url,
          page_url,
          share_text;

        for (let i = 0; i < _options.shareButtons.length; i++) {
          shareButtonData = _options.shareButtons[i];

          image_url = _options.getImageURLForShare(shareButtonData);
          page_url = _options.getPageURLForShare(shareButtonData);
          share_text = _options.getTextForShare(shareButtonData);

          shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url))
            .replace('{{image_url}}', encodeURIComponent(image_url))
            .replace('{{raw_image_url}}', image_url)
            .replace('{{text}}', encodeURIComponent(share_text));

          shareButtonOut += '<a href="' + shareURL + '" target="_blank" ' +
            'class="pswp__share--' + shareButtonData.id + '"' +
            (shareButtonData.download ? 'download' : '') + '>' +
            shareButtonData.label + '</a>';

          if (_options.parseShareButtonOut) {
            shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
          }
        }
        _shareModal.children[0].innerHTML = shareButtonOut;
        _shareModal.children[0].onclick = _openWindowPopup;

      },
      _hasCloseClass = function (target) {
        for (let i = 0; i < _options.closeElClasses.length; i++) {
          if (framework.hasClass(target, 'pswp__' + _options.closeElClasses[i])) {
            return true;
          }
        }
      },
      _idleInterval,
      _idleTimer,
      _idleIncrement = 0,
      _onIdleMouseMove = function () {
        clearTimeout(_idleTimer);
        _idleIncrement = 0;
        if (_isIdle) {
          ui.setIdle(false);
        }
      },
      _onMouseLeaveWindow = function (e) {
        e = e ? e : window.event;
        let from = e.relatedTarget || e.toElement;
        if (!from || from.nodeName === 'HTML') {
          clearTimeout(_idleTimer);
          _idleTimer = setTimeout(function () {
            ui.setIdle(true);
          }, _options.timeToIdleOutside);
        }
      },
      _setupFullscreenAPI = function () {
        if (_options.fullscreenEl && !framework.features.isOldAndroid) {
          if (!_fullscrenAPI) {
            _fullscrenAPI = ui.getFullscreenAPI();
          }
          if (_fullscrenAPI) {
            framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
            ui.updateFullscreen();
            framework.addClass(pswp.template, 'pswp--supports-fs');
          } else {
            framework.removeClass(pswp.template, 'pswp--supports-fs');
          }
        }
      },
      _setupLoadingIndicator = function () {
        // Setup loading indicator
        if (_options.preloaderEl) {

          _toggleLoadingIndicator(true);

          _listen('beforeChange', function () {

            clearTimeout(_loadingIndicatorTimeout);

            // display loading indicator with delay
            _loadingIndicatorTimeout = setTimeout(function () {

              if (pswp.currItem && pswp.currItem.loading) {

                if (!pswp.allowProgressiveImg() || (pswp.currItem.img && !pswp.currItem.img.naturalWidth)) {
                  // show preloader if progressive loading is not enabled,
                  // or image width is not defined yet (because of slow connection)
                  _toggleLoadingIndicator(false);
                  // items-controller.js function allowProgressiveImg
                }

              } else {
                _toggleLoadingIndicator(true); // hide preloader
              }

            }, _options.loadingIndicatorDelay);

          });
          _listen('imageLoadComplete', function (index, item) {
            if (pswp.currItem === item) {
              _toggleLoadingIndicator(true);
            }
          });

        }
      },
      _toggleLoadingIndicator = function (hide) {
        if (_loadingIndicatorHidden !== hide) {
          _togglePswpClass(_loadingIndicator, 'preloader--active', !hide);
          _loadingIndicatorHidden = hide;
        }
      },
      _applyNavBarGaps = function (item) {
        let gap = item.vGap;

        if (_fitControlsInViewport()) {

          let bars = _options.barsSize;
          if (_options.captionEl && bars.bottom === 'auto') {
            if (!_fakeCaptionContainer) {
              _fakeCaptionContainer = framework.createEl('pswp__caption pswp__caption--fake');
              _fakeCaptionContainer.appendChild(framework.createEl('pswp__caption__center'));
              _controls.insertBefore(_fakeCaptionContainer, _captionContainer);
              framework.addClass(_controls, 'pswp__ui--fit');
            }
            if (_options.addCaptionHTMLFn(item, _fakeCaptionContainer, true)) {

              let captionSize = _fakeCaptionContainer.clientHeight;
              gap.bottom = parseInt(captionSize, 10) || 44;
            } else {
              gap.bottom = bars.top; // if no caption, set size of bottom gap to size of top
            }
          } else {
            gap.bottom = bars.bottom === 'auto' ? 0 : bars.bottom;
          }

          // height of top bar is static, no need to calculate it
          gap.top = bars.top;
        } else {
          gap.top = gap.bottom = 0;
        }
      },
      _setupIdle = function () {
        // Hide controls when mouse is used
        if (_options.timeToIdle) {
          _listen('mouseUsed', function () {

            framework.bind(document, 'mousemove', _onIdleMouseMove);
            framework.bind(document, 'mouseout', _onMouseLeaveWindow);

            _idleInterval = setInterval(function () {
              _idleIncrement++;
              if (_idleIncrement === 2) {
                ui.setIdle(true);
              }
            }, _options.timeToIdle / 2);
          });
        }
      },
      _setupHidingControlsDuringGestures = function () {

        // Hide controls on vertical drag
        _listen('onVerticalDrag', function (now) {
          if (_controlsVisible && now < 0.95) {
            ui.hideControls();
          } else if (!_controlsVisible && now >= 0.95) {
            ui.showControls();
          }
        });

        // Hide controls when pinching to close
        let pinchControlsHidden;
        _listen('onPinchClose', function (now) {
          if (_controlsVisible && now < 0.9) {
            ui.hideControls();
            pinchControlsHidden = true;
          } else if (pinchControlsHidden && !_controlsVisible && now > 0.9) {
            ui.showControls();
          }
        });

        _listen('zoomGestureEnded', function () {
          pinchControlsHidden = false;
          if (pinchControlsHidden && !_controlsVisible) {
            ui.showControls();
          }
        });

      };



    let _uiElements = [
      {
        name: 'caption',
        option: 'captionEl',
        onInit: function (el) {
          _captionContainer = el;
        }
      },
      {
        name: 'share-modal',
        option: 'shareEl',
        onInit: function (el) {
          _shareModal = el;
        },
        onTap: function () {
          _toggleShareModal();
        }
      },
      {
        name: 'button--share',
        option: 'shareEl',
        onInit: function (el) {
          _shareButton = el;
        },
        onTap: function () {
          _toggleShareModal();
        }
      },
      {
        name: 'button--zoom',
        option: 'zoomEl',
        onTap: pswp.toggleDesktopZoom
      },
      {
        name: 'counter',
        option: 'counterEl',
        onInit: function (el) {
          _indexIndicator = el;
        }
      },
      {
        name: 'button--close',
        option: 'closeEl',
        onTap: pswp.close
      },
      {
        name: 'button--arrow--left',
        option: 'arrowEl',
        onTap: pswp.prev
      },
      {
        name: 'button--arrow--right',
        option: 'arrowEl',
        onTap: pswp.next
      },
      {
        name: 'button--fs',
        option: 'fullscreenEl',
        onTap: function () {
          if (_fullscrenAPI.isFullscreen()) {
            _fullscrenAPI.exit();
          } else {
            _fullscrenAPI.enter();
          }
        }
      },
      {
        name: 'preloader',
        option: 'preloaderEl',
        onInit: function (el) {
          _loadingIndicator = el;
        }
      }

    ];

    let _setupUIElements = function () {
      let item,
        classAttr,
        uiElement;

      let loopThroughChildElements = function (sChildren) {
        if (!sChildren) {
          return;
        }

        let l = sChildren.length;
        for (let i = 0; i < l; i++) {
          item = sChildren[i];
          classAttr = item.className;

          for (let a = 0; a < _uiElements.length; a++) {
            uiElement = _uiElements[a];

            if (classAttr.indexOf('pswp__' + uiElement.name) > -1) {

              if (_options[uiElement.option]) { // if element is not disabled from options

                framework.removeClass(item, 'pswp__element--disabled');
                if (uiElement.onInit) {
                  uiElement.onInit(item);
                }

                // item.style.display = 'block';
              } else {
                framework.addClass(item, 'pswp__element--disabled');
                // item.style.display = 'none';
              }
            }
          }
        }
      };
      loopThroughChildElements(_controls.children);

      let topBar = framework.getChildByClass(_controls, 'pswp__top-bar');
      if (topBar) {
        loopThroughChildElements(topBar.children);
      }
    };




    ui.init = function () {

      // extend options
      framework.extend(pswp.options, _defaultUIOptions, true);

      // create local link for fast access
      _options = pswp.options;

      // find pswp__ui element
      _controls = framework.getChildByClass(pswp.scrollWrap, 'pswp__ui');

      // create local link
      _listen = pswp.listen;


      _setupHidingControlsDuringGestures();

      // update controls when slides change
      _listen('beforeChange', ui.update);

      // toggle zoom on double-tap
      _listen('doubleTap', function (point) {
        let initialZoomLevel = pswp.currItem.initialZoomLevel;
        if (pswp.getZoomLevel() !== initialZoomLevel) {
          pswp.zoomTo(initialZoomLevel, point, 333);
        } else {
          pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
        }
      });

      // Allow text selection in caption
      _listen('preventDragEvent', function (e, isDown, preventObj) {
        let t = e.target || e.srcElement;
        if (
          t &&
          t.getAttribute('class') && e.type.indexOf('mouse') > -1 &&
          (t.getAttribute('class').indexOf('__caption') > 0 || (/(SMALL|STRONG|EM)/i).test(t.tagName))
        ) {
          preventObj.prevent = false;
        }
      });

      // bind events for UI
      _listen('bindEvents', function () {
        framework.bind(_controls, 'pswpTap click', _onControlsTap);
        framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);

        if (!pswp.likelyTouchDevice) {
          framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
        }
      });

      // unbind events for UI
      _listen('unbindEvents', function () {
        if (!_shareModalHidden) {
          _toggleShareModal();
        }

        if (_idleInterval) {
          clearInterval(_idleInterval);
        }
        framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
        framework.unbind(document, 'mousemove', _onIdleMouseMove);
        framework.unbind(_controls, 'pswpTap click', _onControlsTap);
        framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
        framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);

        if (_fullscrenAPI) {
          framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
          if (_fullscrenAPI.isFullscreen()) {
            _options.hideAnimationDuration = 0;
            _fullscrenAPI.exit();
          }
          _fullscrenAPI = null;
        }
      });


      // clean up things when gallery is destroyed
      _listen('destroy', function () {
        if (_options.captionEl) {
          if (_fakeCaptionContainer) {
            _controls.removeChild(_fakeCaptionContainer);
          }
          framework.removeClass(_captionContainer, 'pswp__caption--empty');
        }

        if (_shareModal) {
          _shareModal.children[0].onclick = null;
        }
        framework.removeClass(_controls, 'pswp__ui--over-close');
        framework.addClass(_controls, 'pswp__ui--hidden');
        ui.setIdle(false);
      });


      if (!_options.showAnimationDuration) {
        framework.removeClass(_controls, 'pswp__ui--hidden');
      }
      _listen('initialZoomIn', function () {
        if (_options.showAnimationDuration) {
          framework.removeClass(_controls, 'pswp__ui--hidden');
        }
      });
      _listen('initialZoomOut', function () {
        framework.addClass(_controls, 'pswp__ui--hidden');
      });

      _listen('parseVerticalMargin', _applyNavBarGaps);

      _setupUIElements();

      if (_options.shareEl && _shareButton && _shareModal) {
        _shareModalHidden = true;
      }

      _countNumItems();

      _setupIdle();

      _setupFullscreenAPI();

      _setupLoadingIndicator();
    };

    ui.setIdle = function (isIdle) {
      _isIdle = isIdle;
      _togglePswpClass(_controls, 'ui--idle', isIdle);
    };

    ui.update = function () {
      // Don't update UI if it's hidden
      if (_controlsVisible && pswp.currItem) {

        ui.updateIndexIndicator();

        if (_options.captionEl) {
          _options.addCaptionHTMLFn(pswp.currItem, _captionContainer);

          _togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
        }

        _overlayUIUpdated = true;

      } else {
        _overlayUIUpdated = false;
      }

      if (!_shareModalHidden) {
        _toggleShareModal();
      }

      _countNumItems();
    };

    ui.updateFullscreen = function (e) {

      if (e) {
        // some browsers change window scroll position during the fullscreen
        // so PhotoSwipe updates it just in case
        setTimeout(function () {
          pswp.setScrollOffset(0, framework.getScrollY());
        }, 50);
      }

      // toogle pswp--fs class on root element
      framework[(_fullscrenAPI.isFullscreen() ? 'add' : 'remove') + 'Class'](pswp.template, 'pswp--fs');
    };

    ui.updateIndexIndicator = function () {
      if (_options.counterEl) {
        _indexIndicator.innerHTML = (pswp.getCurrentIndex() + 1) +
          _options.indexIndicatorSep +
          _options.getNumItemsFn();
      }
    };

    ui.onGlobalTap = function (e) {
      e = e || window.event;
      let target = e.target || e.srcElement;

      if (_blockControlsTap) {
        return;
      }

      if (e.detail && e.detail.pointerType === 'mouse') {

        // close gallery if clicked outside of the image
        if (_hasCloseClass(target)) {
          pswp.close();
          return;
        }

        if (framework.hasClass(target, 'pswp__img')) {
          if (pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
            if (_options.clickToCloseNonZoomable) {
              pswp.close();
            }
          } else {
            pswp.toggleDesktopZoom(e.detail.releasePoint);
          }
        }

      } else {

        // tap anywhere (except buttons) to toggle visibility of controls
        if (_options.tapToToggleControls) {
          if (_controlsVisible) {
            ui.hideControls();
          } else {
            ui.showControls();
          }
        }

        // tap to close gallery
        if (_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target))) {
          pswp.close();
          return;
        }

      }
    };
    ui.onMouseOver = function (e) {
      e = e || window.event;
      let target = e.target || e.srcElement;

      // add class when mouse is over an element that should close the gallery
      _togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
    };

    ui.hideControls = function () {
      framework.addClass(_controls, 'pswp__ui--hidden');
      _controlsVisible = false;
    };

    ui.showControls = function () {
      _controlsVisible = true;
      if (!_overlayUIUpdated) {
        ui.update();
      }
      framework.removeClass(_controls, 'pswp__ui--hidden');
    };

    ui.supportsFullscreen = function () {
      let d: any = document;
      return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
    };

    ui.getFullscreenAPI = function () {
      let dE: any = document.documentElement,
        api,
        tF = 'fullscreenchange';

      if (dE.requestFullscreen) {
        api = {
          enterK: 'requestFullscreen',
          exitK: 'exitFullscreen',
          elementK: 'fullscreenElement',
          eventK: tF
        };

      } else if (dE.mozRequestFullScreen) {
        api = {
          enterK: 'mozRequestFullScreen',
          exitK: 'mozCancelFullScreen',
          elementK: 'mozFullScreenElement',
          eventK: 'moz' + tF
        };



      } else if (dE.webkitRequestFullscreen) {
        api = {
          enterK: 'webkitRequestFullscreen',
          exitK: 'webkitExitFullscreen',
          elementK: 'webkitFullscreenElement',
          eventK: 'webkit' + tF
        };

      } else if (dE.msRequestFullscreen) {
        api = {
          enterK: 'msRequestFullscreen',
          exitK: 'msExitFullscreen',
          elementK: 'msFullscreenElement',
          eventK: 'MSFullscreenChange'
        };
      }

      if (api) {
        api.enter = function () {
          // disable close-on-scroll in fullscreen
          _initalCloseOnScrollValue = _options.closeOnScroll;
          _options.closeOnScroll = false;

          if (this.enterK === 'webkitRequestFullscreen') {
            pswp.template[this.enterK]();
          } else {
            return pswp.template[this.enterK]();
          }
        };
        api.exit = function () {
          _options.closeOnScroll = _initalCloseOnScrollValue;

          return document[this.exitK]();

        };
        api.isFullscreen = function () { return document[this.elementK]; };
      }

      return api;
    };



  };

