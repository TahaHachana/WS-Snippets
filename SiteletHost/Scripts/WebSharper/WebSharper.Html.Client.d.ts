declare module WebSharper {
    module Html {
        module Client {
            module Element {
                var New : {
                    (html: __ABBREV.__Interfaces.IHtmlProvider, name: string): __ABBREV.__Client.Element;
                };
            }
            module Interfaces {
                interface IHtmlProvider {
                    CreateTextNode(x0: string): __ABBREV.__Dom.Text;
                    CreateElement(x0: string): __ABBREV.__Dom.Element;
                    SetAttribute(x0: __ABBREV.__Dom.Node, x1: string, x2: string): void;
                    AppendAttribute(x0: __ABBREV.__Dom.Node, x1: __ABBREV.__Dom.Attr): void;
                    RemoveAttribute(x0: __ABBREV.__Dom.Node, x1: string): void;
                    GetAttribute(x0: __ABBREV.__Dom.Node, x1: string): string;
                    HasAttribute(x0: __ABBREV.__Dom.Node, x1: string): boolean;
                    CreateAttribute(x0: string): __ABBREV.__Dom.Attr;
                    GetProperty<_M1>(x0: __ABBREV.__Dom.Node, x1: string): _M1;
                    SetProperty<_M1>(x0: __ABBREV.__Dom.Node, x1: string, x2: _M1): void;
                    AppendNode(x0: __ABBREV.__Dom.Node, x1: __ABBREV.__Dom.Node): void;
                    Clear(x0: __ABBREV.__Dom.Node): void;
                    Remove(x0: __ABBREV.__Dom.Node): void;
                    SetText(x0: __ABBREV.__Dom.Node, x1: string): void;
                    GetText(x0: __ABBREV.__Dom.Node): string;
                    SetHtml(x0: __ABBREV.__Dom.Node, x1: string): void;
                    GetHtml(x0: __ABBREV.__Dom.Node): string;
                    SetValue(x0: __ABBREV.__Dom.Node, x1: string): void;
                    GetValue(x0: __ABBREV.__Dom.Node): string;
                    SetStyle(x0: __ABBREV.__Dom.Node, x1: string): void;
                    SetCss(x0: __ABBREV.__Dom.Node, x1: string, x2: string): void;
                    AddClass(x0: __ABBREV.__Dom.Node, x1: string): void;
                    RemoveClass(x0: __ABBREV.__Dom.Node, x1: string): void;
                    OnLoad(x0: __ABBREV.__Dom.Node, x1: {
                        (): void;
                    }): void;
                    OnDocumentReady(x0: {
                        (): void;
                    }): void;
                }
            }
            module EventsPervasives {
                var Events : {
                    (): __ABBREV.__Events.IEventSupport;
                };
            }
            module Events {
                interface IEventSupport {
                    OnEvent<_M1>(eventName: string, x1: {
                        (x: _M1): {
                            (x: __ABBREV.__Dom.Event): void;
                        };
                    }, x2: _M1): void;
                    OnClick<_M1>(x0: {
                        (x: _M1): {
                            (x: any): void;
                        };
                    }, x1: _M1): void;
                    OnDoubleClick<_M1>(x0: {
                        (x: _M1): {
                            (x: any): void;
                        };
                    }, x1: _M1): void;
                    OnMouseDown<_M1>(x0: {
                        (x: _M1): {
                            (x: any): void;
                        };
                    }, x1: _M1): void;
                    OnMouseEnter<_M1>(x0: {
                        (x: _M1): {
                            (x: any): void;
                        };
                    }, x1: _M1): void;
                    OnMouseLeave<_M1>(x0: {
                        (x: _M1): {
                            (x: any): void;
                        };
                    }, x1: _M1): void;
                    OnMouseMove<_M1>(x0: {
                        (x: _M1): {
                            (x: any): void;
                        };
                    }, x1: _M1): void;
                    OnMouseOut<_M1>(x0: {
                        (x: _M1): {
                            (x: any): void;
                        };
                    }, x1: _M1): void;
                    OnMouseUp<_M1>(x0: {
                        (x: _M1): {
                            (x: any): void;
                        };
                    }, x1: _M1): void;
                    OnKeyDown<_M1>(x0: {
                        (x: _M1): {
                            (x: any): void;
                        };
                    }, x1: _M1): void;
                    OnKeyPress<_M1>(x0: {
                        (x: _M1): {
                            (x: any): void;
                        };
                    }, x1: _M1): void;
                    OnKeyUp<_M1>(x0: {
                        (x: _M1): {
                            (x: any): void;
                        };
                    }, x1: _M1): void;
                    OnBlur<_M1>(x0: {
                        (x: _M1): void;
                    }, x1: _M1): void;
                    OnChange<_M1>(x0: {
                        (x: _M1): void;
                    }, x1: _M1): void;
                    OnFocus<_M1>(x0: {
                        (x: _M1): void;
                    }, x1: _M1): void;
                    OnError<_M1>(x0: {
                        (x: _M1): void;
                    }, x1: _M1): void;
                    OnLoad<_M1>(x0: {
                        (x: _M1): void;
                    }, x1: _M1): void;
                    OnUnLoad<_M1>(x0: {
                        (x: _M1): void;
                    }, x1: _M1): void;
                    OnResize<_M1>(x0: {
                        (x: _M1): void;
                    }, x1: _M1): void;
                    OnScroll<_M1>(x0: {
                        (x: _M1): void;
                    }, x1: _M1): void;
                    OnSelect<_M1>(x0: {
                        (x: _M1): void;
                    }, x1: _M1): void;
                    OnSubmit<_M1>(x0: {
                        (x: _M1): void;
                    }, x1: _M1): void;
                }
                interface MouseEvent {
                    X: number;
                    Y: number;
                    Event: __ABBREV.__Dom.MouseEvent;
                }
                interface CharacterCode {
                    CharacterCode: number;
                    Event: __ABBREV.__Dom.KeyboardEvent;
                }
                interface KeyCode {
                    KeyCode: number;
                    Event: __ABBREV.__Dom.KeyboardEvent;
                }
            }
            module Attr {
                var Attr : {
                    (): __ABBREV.__Client.AttributeBuilder;
                };
            }
            module Tags {
                var Tags : {
                    (): __ABBREV.__Client.TagBuilder;
                };
                var Deprecated : {
                    (): __ABBREV.__Client.DeprecatedTagBuilder;
                };
            }
            module Default {
                var OnLoad : {
                    (init: {
                        (): void;
                    }): void;
                };
            }
            module Operators {
                var add : {
                    <_M1>(el: __ABBREV.__Client.Element, inner: __ABBREV.__WebSharper.seq<_M1>): __ABBREV.__Client.Element;
                };
                var OnAfterRender : {
                    <_M1>(f: {
                        (x: _M1): void;
                    }, w: _M1): void;
                };
                var OnBeforeRender : {
                    <_M1>(f: {
                        (x: _M1): void;
                    }, w: _M1): void;
                };
            }
            interface Pagelet {
                Render(): void;
                AppendTo(targetId: string): void;
                ReplaceInDom(node: __ABBREV.__Dom.Node): void;
            }
            interface Element {
                Render(): void;
                OnLoad(f: {
                    (): void;
                }): void;
                AppendI(pl: __ABBREV.__Client.Pagelet): void;
                AppendN(node: __ABBREV.__Dom.Node): void;
                get_Body(): __ABBREV.__Dom.Node;
                get_Text(): string;
                set_Text(x: string): void;
                get_Html(): string;
                set_Html(x: string): void;
                get_Value(): string;
                set_Value(x: string): void;
                get_Id(): string;
                get_HtmlProvider(): __ABBREV.__Interfaces.IHtmlProvider;
                get_Item(name: string): string;
                set_Item(name: string, value: string): void;
            }
            interface DeprecatedTagBuilder {
                NewTag<_M1>(name: string, children: __ABBREV.__WebSharper.seq<_M1>): __ABBREV.__Client.Element;
            }
            interface TagBuilder {
                NewTag<_M1>(name: string, children: __ABBREV.__WebSharper.seq<_M1>): __ABBREV.__Client.Element;
                text(data: string): __ABBREV.__Client.Pagelet;
            }
            interface DeprecatedAttributeBuilder {
                NewAttr(name: string, value: string): __ABBREV.__Client.Pagelet;
            }
            interface AttributeBuilder {
                NewAttr(name: string, value: string): __ABBREV.__Client.Pagelet;
            }
        }
    }
}
declare module __ABBREV {
    
    export import __Interfaces = WebSharper.Html.Client.Interfaces;
    export import __Client = WebSharper.Html.Client;
    export import __Dom = WebSharper.JavaScript.Dom;
    export import __Events = WebSharper.Html.Client.Events;
    export import __WebSharper = WebSharper;
}
