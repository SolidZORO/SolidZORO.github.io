!(function (e) {
  var t = {};

  function n(a) {
    if (t[a]) return t[a].exports;
    var r = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }

  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, a) {
      n.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: a,
        });
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = './_statics/'),
    n((n.s = 0));
})([
  function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = n(1),
      r = n.n(a),
      i = n(2),
      s = (n.n(i), n(4));
    n.n(s);
    r()(() => {
      // r()('.entry-item__comment').length &&
      //   (() => {
      //     const e = document,
      //       t = e.createElement('script');
      //     (t.src = 'https://solidzoro.disqus.com/embed.js'),
      //       t.setAttribute('data-timestamp', +new Date()),
      //       (e.head || e.body).appendChild(t);
      //   })(),
      //   r()('.layout-body--book').length &&
      //     r.a.ajax({
      //       type: 'get',
      //       async: !1,
      //       url: 'https://api.douban.com/v2/book/user/SolidZORO/collections',
      //       dataType: 'jsonp',
      //       jsonp: 'callback',
      //       jsonpCallback: 'bookList',
      //       success(e) {
      //         const t = r()('.book-list');
      //         t.html(''),
      //           r.a.each(e.collections, (e, n) => {
      //             t.append(
      //               `\n            <li class="book-list__item">\n              <div class="image">\n                <a href="${
      //                 n.book.alt
      //               }" target=_blank><img src="${n.book.images.large}" alt="${
      //                 n.book.title
      //               }"></a>\n              </div>\n              <div class="info">\n                <h2 class="title">\n                  <a href="${
      //                 n.book.alt
      //               }" target=_blank>${
      //                 n.book.title
      //               }</a>\n                </h2>\n                <h3 class="author">${
      //                 n.book.author
      //               }</h3>\n                <p class="comment">${
      //                 n.comment ? n.comment : '<span>//<span>'
      //               }</p>\n              </div>\n            </li>\n          `,
      //             );
      //           });
      //       },
      //       error() {
      //         console.log('fail');
      //       },
      //     });
    });
    !(function () {
      var e = document.createElement('script');
      e.src = 'https://hm.baidu.com/hm.js?63392a0ec51d4ad23453b82650af1329';
      var t = document.getElementsByTagName('script')[0];
      t.parentNode.insertBefore(e, t);
    })();
  },
  function (e, t) {
    e.exports = jQuery;
  },
  function (e, t, n) {
    (function (t) {
      var n =
          'undefined' != typeof window
            ? window
            : 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope
            ? self
            : {},
        a = (function () {
          var e = /\blang(?:uage)?-(\w+)\b/i,
            t = 0,
            a = (n.Prism = {
              manual: n.Prism && n.Prism.manual,
              disableWorkerMessageHandler: n.Prism && n.Prism.disableWorkerMessageHandler,
              util: {
                encode: function (e) {
                  return e instanceof r
                    ? new r(e.type, a.util.encode(e.content), e.alias)
                    : 'Array' === a.util.type(e)
                    ? e.map(a.util.encode)
                    : e
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/\u00a0/g, ' ');
                },
                type: function (e) {
                  return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
                },
                objId: function (e) {
                  return e.__id || Object.defineProperty(e, '__id', { value: ++t }), e.__id;
                },
                clone: function (e) {
                  switch (a.util.type(e)) {
                    case 'Object':
                      var t = {};
                      for (var n in e) e.hasOwnProperty(n) && (t[n] = a.util.clone(e[n]));
                      return t;
                    case 'Array':
                      return e.map(function (e) {
                        return a.util.clone(e);
                      });
                  }
                  return e;
                },
              },
              languages: {
                extend: function (e, t) {
                  var n = a.util.clone(a.languages[e]);
                  for (var r in t) n[r] = t[r];
                  return n;
                },
                insertBefore: function (e, t, n, r) {
                  var i = (r = r || a.languages)[e];
                  if (2 == arguments.length) {
                    for (var s in (n = arguments[1])) n.hasOwnProperty(s) && (i[s] = n[s]);
                    return i;
                  }
                  var o = {};
                  for (var l in i)
                    if (i.hasOwnProperty(l)) {
                      if (l == t) for (var s in n) n.hasOwnProperty(s) && (o[s] = n[s]);
                      o[l] = i[l];
                    }
                  return (
                    a.languages.DFS(a.languages, function (t, n) {
                      n === r[e] && t != e && (this[t] = o);
                    }),
                    (r[e] = o)
                  );
                },
                DFS: function (e, t, n, r) {
                  for (var i in ((r = r || {}), e))
                    e.hasOwnProperty(i) &&
                      (t.call(e, i, e[i], n || i),
                      'Object' !== a.util.type(e[i]) || r[a.util.objId(e[i])]
                        ? 'Array' !== a.util.type(e[i]) ||
                          r[a.util.objId(e[i])] ||
                          ((r[a.util.objId(e[i])] = !0), a.languages.DFS(e[i], t, i, r))
                        : ((r[a.util.objId(e[i])] = !0), a.languages.DFS(e[i], t, null, r)));
                },
              },
              plugins: {},
              highlightAll: function (e, t) {
                a.highlightAllUnder(document, e, t);
              },
              highlightAllUnder: function (e, t, n) {
                var r = {
                  callback: n,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                };
                a.hooks.run('before-highlightall', r);
                for (var i, s = r.elements || e.querySelectorAll(r.selector), o = 0; (i = s[o++]); )
                  a.highlightElement(i, !0 === t, r.callback);
              },
              highlightElement: function (t, r, i) {
                for (var s, o, l = t; l && !e.test(l.className); ) l = l.parentNode;
                l &&
                  ((s = (l.className.match(e) || [, ''])[1].toLowerCase()), (o = a.languages[s])),
                  (t.className =
                    t.className.replace(e, '').replace(/\s+/g, ' ') + ' language-' + s),
                  t.parentNode &&
                    ((l = t.parentNode),
                    /pre/i.test(l.nodeName) &&
                      (l.className =
                        l.className.replace(e, '').replace(/\s+/g, ' ') + ' language-' + s));
                var u = {
                  element: t,
                  language: s,
                  grammar: o,
                  code: t.textContent,
                };
                if ((a.hooks.run('before-sanity-check', u), !u.code || !u.grammar))
                  return (
                    u.code &&
                      (a.hooks.run('before-highlight', u),
                      (u.element.textContent = u.code),
                      a.hooks.run('after-highlight', u)),
                    void a.hooks.run('complete', u)
                  );
                if ((a.hooks.run('before-highlight', u), r && n.Worker)) {
                  var c = new Worker(a.filename);
                  (c.onmessage = function (e) {
                    (u.highlightedCode = e.data),
                      a.hooks.run('before-insert', u),
                      (u.element.innerHTML = u.highlightedCode),
                      i && i.call(u.element),
                      a.hooks.run('after-highlight', u),
                      a.hooks.run('complete', u);
                  }),
                    c.postMessage(
                      JSON.stringify({
                        language: u.language,
                        code: u.code,
                        immediateClose: !0,
                      }),
                    );
                } else
                  (u.highlightedCode = a.highlight(u.code, u.grammar, u.language)),
                    a.hooks.run('before-insert', u),
                    (u.element.innerHTML = u.highlightedCode),
                    i && i.call(t),
                    a.hooks.run('after-highlight', u),
                    a.hooks.run('complete', u);
              },
              highlight: function (e, t, n) {
                var i = a.tokenize(e, t);
                return r.stringify(a.util.encode(i), n);
              },
              matchGrammar: function (e, t, n, r, i, s, o) {
                var l = a.Token;
                for (var u in n)
                  if (n.hasOwnProperty(u) && n[u]) {
                    if (u == o) return;
                    var c = n[u];
                    c = 'Array' === a.util.type(c) ? c : [c];
                    for (var g = 0; g < c.length; ++g) {
                      var p = c[g],
                        d = p.inside,
                        h = !!p.lookbehind,
                        f = !!p.greedy,
                        m = 0,
                        y = p.alias;
                      if (f && !p.pattern.global) {
                        var b = p.pattern.toString().match(/[imuy]*$/)[0];
                        p.pattern = RegExp(p.pattern.source, b + 'g');
                      }
                      p = p.pattern || p;
                      for (var v = r, k = i; v < t.length; k += t[v].length, ++v) {
                        var w = t[v];
                        if (t.length > e.length) return;
                        if (!(w instanceof l)) {
                          p.lastIndex = 0;
                          var x = 1;
                          if (!(P = p.exec(w)) && f && v != t.length - 1) {
                            if (((p.lastIndex = k), !(P = p.exec(e)))) break;
                            for (
                              var F = P.index + (h ? P[1].length : 0),
                                j = P.index + P[0].length,
                                S = v,
                                A = k,
                                O = t.length;
                              S < O && (A < j || (!t[S].type && !t[S - 1].greedy));
                              ++S
                            )
                              F >= (A += t[S].length) && (++v, (k = A));
                            if (t[v] instanceof l || t[S - 1].greedy) continue;
                            (x = S - v), (w = e.slice(k, A)), (P.index -= k);
                          }
                          if (P) {
                            h && (m = P[1].length);
                            j = (F = P.index + m) + (P = P[0].slice(m)).length;
                            var P,
                              $ = w.slice(0, F),
                              C = w.slice(j),
                              N = [v, x];
                            $ && (++v, (k += $.length), N.push($));
                            var _ = new l(u, d ? a.tokenize(P, d) : P, y, P, f);
                            if (
                              (N.push(_),
                              C && N.push(C),
                              Array.prototype.splice.apply(t, N),
                              1 != x && a.matchGrammar(e, t, n, v, k, !0, u),
                              s)
                            )
                              break;
                          } else if (s) break;
                        }
                      }
                    }
                  }
              },
              tokenize: function (e, t, n) {
                var r = [e],
                  i = t.rest;
                if (i) {
                  for (var s in i) t[s] = i[s];
                  delete t.rest;
                }
                return a.matchGrammar(e, r, t, 0, 0, !1), r;
              },
              hooks: {
                all: {},
                add: function (e, t) {
                  var n = a.hooks.all;
                  (n[e] = n[e] || []), n[e].push(t);
                },
                run: function (e, t) {
                  var n = a.hooks.all[e];
                  if (n && n.length) for (var r, i = 0; (r = n[i++]); ) r(t);
                },
              },
            }),
            r = (a.Token = function (e, t, n, a, r) {
              (this.type = e),
                (this.content = t),
                (this.alias = n),
                (this.length = 0 | (a || '').length),
                (this.greedy = !!r);
            });
          if (
            ((r.stringify = function (e, t, n) {
              if ('string' == typeof e) return e;
              if ('Array' === a.util.type(e))
                return e
                  .map(function (n) {
                    return r.stringify(n, t, e);
                  })
                  .join('');
              var i = {
                type: e.type,
                content: r.stringify(e.content, t, n),
                tag: 'span',
                classes: ['token', e.type],
                attributes: {},
                language: t,
                parent: n,
              };
              if (e.alias) {
                var s = 'Array' === a.util.type(e.alias) ? e.alias : [e.alias];
                Array.prototype.push.apply(i.classes, s);
              }
              a.hooks.run('wrap', i);
              var o = Object.keys(i.attributes)
                .map(function (e) {
                  return e + '="' + (i.attributes[e] || '').replace(/"/g, '&quot;') + '"';
                })
                .join(' ');
              return (
                '<' +
                i.tag +
                ' class="' +
                i.classes.join(' ') +
                '"' +
                (o ? ' ' + o : '') +
                '>' +
                i.content +
                '</' +
                i.tag +
                '>'
              );
            }),
            !n.document)
          )
            return n.addEventListener
              ? (a.disableWorkerMessageHandler ||
                  n.addEventListener(
                    'message',
                    function (e) {
                      var t = JSON.parse(e.data),
                        r = t.language,
                        i = t.code,
                        s = t.immediateClose;
                      n.postMessage(a.highlight(i, a.languages[r], r)), s && n.close();
                    },
                    !1,
                  ),
                n.Prism)
              : n.Prism;
          var i =
            document.currentScript || [].slice.call(document.getElementsByTagName('script')).pop();
          return (
            i &&
              ((a.filename = i.src),
              a.manual ||
                i.hasAttribute('data-manual') ||
                ('loading' !== document.readyState
                  ? window.requestAnimationFrame
                    ? window.requestAnimationFrame(a.highlightAll)
                    : window.setTimeout(a.highlightAll, 16)
                  : document.addEventListener('DOMContentLoaded', a.highlightAll))),
            n.Prism
          );
        })();
      void 0 !== e && e.exports && (e.exports = a),
        void 0 !== t && (t.Prism = a),
        (a.languages.markup = {
          comment: /<!--[\s\S]*?-->/,
          prolog: /<\?[\s\S]+?\?>/,
          doctype: /<!DOCTYPE[\s\S]+?>/i,
          cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
              },
              'attr-value': {
                pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                inside: {
                  punctuation: [
                    /^=/,
                    {
                      pattern: /(^|[^\\])["']/,
                      lookbehind: !0,
                    },
                  ],
                },
              },
              punctuation: /\/?>/,
              'attr-name': {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ },
              },
            },
          },
          entity: /&#?[\da-z]{1,8};/i,
        }),
        (a.languages.markup.tag.inside['attr-value'].inside.entity = a.languages.markup.entity),
        a.hooks.add('wrap', function (e) {
          'entity' === e.type && (e.attributes.title = e.content.replace(/&amp;/, '&'));
        }),
        (a.languages.xml = a.languages.markup),
        (a.languages.html = a.languages.markup),
        (a.languages.mathml = a.languages.markup),
        (a.languages.svg = a.languages.markup),
        (a.languages.css = {
          comment: /\/\*[\s\S]*?\*\//,
          atrule: {
            pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
            inside: { rule: /@[\w-]+/ },
          },
          url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
          selector: /[^{}\s][^{};]*?(?=\s*\{)/,
          string: {
            pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
          important: /\B!important\b/i,
          function: /[-a-z0-9]+(?=\()/i,
          punctuation: /[(){};:]/,
        }),
        (a.languages.css.atrule.inside.rest = a.util.clone(a.languages.css)),
        a.languages.markup &&
          (a.languages.insertBefore('markup', 'tag', {
            style: {
              pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
              lookbehind: !0,
              inside: a.languages.css,
              alias: 'language-css',
              greedy: !0,
            },
          }),
          a.languages.insertBefore(
            'inside',
            'attr-value',
            {
              'style-attr': {
                pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                inside: {
                  'attr-name': {
                    pattern: /^\s*style/i,
                    inside: a.languages.markup.tag.inside,
                  },
                  punctuation: /^\s*=\s*['"]|['"]\s*$/,
                  'attr-value': { pattern: /.+/i, inside: a.languages.css },
                },
                alias: 'language-css',
              },
            },
            a.languages.markup.tag,
          )),
        (a.languages.clike = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          'class-name': {
            pattern:
              /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
          boolean: /\b(?:true|false)\b/,
          function: /[a-z0-9_]+(?=\()/i,
          number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
          operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (a.languages.javascript = a.languages.extend('clike', {
          keyword:
            /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
          number:
            /\b-?(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[Ee][+-]?\d+)?|NaN|Infinity)\b/,
          function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
          operator:
            /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
        })),
        a.languages.insertBefore('javascript', 'keyword', {
          regex: {
            pattern:
              /(^|[^/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
            lookbehind: !0,
            greedy: !0,
          },
          'function-variable': {
            pattern:
              /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
            alias: 'function',
          },
        }),
        a.languages.insertBefore('javascript', 'string', {
          'template-string': {
            pattern: /`(?:\\[\s\S]|[^\\`])*`/,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /\$\{[^}]+\}/,
                inside: {
                  'interpolation-punctuation': {
                    pattern: /^\$\{|\}$/,
                    alias: 'punctuation',
                  },
                  rest: a.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
        }),
        a.languages.markup &&
          a.languages.insertBefore('markup', 'tag', {
            script: {
              pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
              lookbehind: !0,
              inside: a.languages.javascript,
              alias: 'language-javascript',
              greedy: !0,
            },
          }),
        (a.languages.js = a.languages.javascript),
        'undefined' != typeof self &&
          self.Prism &&
          self.document &&
          document.querySelector &&
          ((self.Prism.fileHighlight = function () {
            var e = {
              js: 'javascript',
              py: 'python',
              rb: 'ruby',
              ps1: 'powershell',
              psm1: 'powershell',
              sh: 'bash',
              bat: 'batch',
              h: 'c',
              tex: 'latex',
            };
            Array.prototype.slice
              .call(document.querySelectorAll('pre[data-src]'))
              .forEach(function (t) {
                for (
                  var n,
                    r = t.getAttribute('data-src'),
                    i = t,
                    s = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
                  i && !s.test(i.className);

                )
                  i = i.parentNode;
                if ((i && (n = (t.className.match(s) || [, ''])[1]), !n)) {
                  var o = (r.match(/\.(\w+)$/) || [, ''])[1];
                  n = e[o] || o;
                }
                var l = document.createElement('code');
                (l.className = 'language-' + n),
                  (t.textContent = ''),
                  (l.textContent = 'Loading…'),
                  t.appendChild(l);
                var u = new XMLHttpRequest();
                u.open('GET', r, !0),
                  (u.onreadystatechange = function () {
                    4 == u.readyState &&
                      (u.status < 400 && u.responseText
                        ? ((l.textContent = u.responseText), a.highlightElement(l))
                        : u.status >= 400
                        ? (l.textContent =
                            '✖ Error ' + u.status + ' while fetching file: ' + u.statusText)
                        : (l.textContent = '✖ Error: File does not exist or is empty'));
                  }),
                  u.send(null);
              });
          }),
          document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight));
    }).call(t, n(3));
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || Function('return this')() || (0, eval)('this');
    } catch (e) {
      'object' == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t) {},
]);
