declare module Website {
    module Highlight {
        interface Result {
        }
        interface Control {
            get_Body(): __ABBREV.__Html.IPagelet;
        }
    }
    module Controls {
        module Snippet32 {
            module JS {
                var timerHandle : {
                    (btn: __ABBREV.__Html.Element): any;
                };
                var clearBtn : {
                    (): __ABBREV.__Html.Element;
                };
                var clearTimeout : {
                    (btn: __ABBREV.__Html.Element, handle: any): void;
                };
                var main : {
                    (): __ABBREV.__Html.Element;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet31 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
            var btn : {
                (txt: string): __ABBREV.__Html.Element;
            };
            var main : {
                (): __ABBREV.__Html.Element;
            };
        }
        module Snippet29 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
            var map : {
                (): __ABBREV.__Html.Element;
            };
        }
        module Snippet28 {
            module Client {
                var dataTable : {
                    <_M1, _M2>(data: __ABBREV.__List.T<any>): __ABBREV.__visualization.DataTable;
                };
                var pie : {
                    <_M1, _M2>(data: __ABBREV.__List.T<any>, dom: __ABBREV.__Dom.Element): void;
                };
                var main : {
                    (): __ABBREV.__Html.Element;
                };
                var data : {
                    (): __ABBREV.__List.T<any>;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet26 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet25 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet24 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet23 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet22 {
            module JS {
                var toStr : {
                    <_M1>(x: _M1): string;
                };
                var setText : {
                    <_M1>(id: string, property: _M1): void;
                };
                var displayPosition : {
                    (p: __ABBREV.__Html5.Position): void;
                };
                var tr : {
                    (thTxt: string, tdId: string): __ABBREV.__Html.Element;
                };
                var main : {
                    (): __ABBREV.__Html.Element;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet21 {
            module JS {
                var img : {
                    (x: string): __ABBREV.__Html.Element;
                };
                var imgDiv : {
                    (img: __ABBREV.__Html.IPagelet): __ABBREV.__Html.Element;
                };
                var handleDragStart : {
                    (idRef: __ABBREV.__WebSharper.ref<string>, elt: __ABBREV.__Html.Element): void;
                };
                var handleDragging : {
                    (elt: __ABBREV.__Html.Element, idRef: __ABBREV.__WebSharper.ref<string>): void;
                };
                var main : {
                    (): __ABBREV.__Html.Element;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet20 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
            var main : {
                (): __ABBREV.__Html.Element;
            };
        }
        module Snippet19 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
            var main : {
                (): __ABBREV.__Html.Element;
            };
        }
        module Snippet18 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet17 {
            module Client {
                var draw : {
                    (ctx: __ABBREV.__Html5.CanvasRenderingContext2D): void;
                };
                var loop : {
                    (ctx: __ABBREV.__Html5.CanvasRenderingContext2D): any;
                };
                var main : {
                    (): __ABBREV.__Html.Element;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet16 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet15 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet14 {
            module Client {
                var accordionGroup : {
                    (num: number): __ABBREV.__Html.Element;
                };
                var main : {
                    (): __ABBREV.__Html.Element;
                };
                var loremIpsum : {
                    (): string;
                };
                var style : {
                    (): string;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet13 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet12 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet11 {
            module Client {
                var th : {
                    (txt: string): __ABBREV.__Html.Element;
                };
                var tr : {
                    (level: string): __ABBREV.__Html.Element;
                };
                var main : {
                    (): __ABBREV.__Html.Element;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet10 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet9 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet8 {
            module Client {
                var log : {
                    (text: string, color: string): void;
                };
                var append : {
                    (id: string, btn: __ABBREV.__Html.Element): void;
                };
                var handleEvents : {
                    (ws: __ABBREV.__Html5.WebSocket, disconnectBtn: __ABBREV.__Html.Element, sendBtn: __ABBREV.__Html.Element): void;
                };
                var connect : {
                    (msgText: __ABBREV.__Html.Element): void;
                };
                var main : {
                    (): __ABBREV.__Html.Element;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet7 {
            module Client {
                var main : {
                    (): __ABBREV.__Html.Element;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet6 {
            module Client {
                var setText : {
                    (id: string, txt: string): void;
                };
                var toStr : {
                    <_M1>(f: _M1): string;
                };
                var display : {
                    (p: __ABBREV.__Html5.Position): void;
                };
                var getPosition : {
                    (): any;
                };
                var tr : {
                    (thTxt: string, tdId: string): __ABBREV.__Html.Element;
                };
                var main : {
                    (): __ABBREV.__Html.Element;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet5 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet4 {
            interface Tweet {
                Avatar: string;
                Date: string;
                Html: string;
                Id: string;
                Name: string;
                ScreenName: string;
            }
            interface SearchResult {
            }
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet3 {
            module Client {
                var tr : {
                    (td: string, _td_: string): __ABBREV.__Html.Element;
                };
                var main : {
                    (): __ABBREV.__Html.Element;
                };
            }
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet2 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet1 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
    }
    module Login {
        interface Control {
            get_Body(): __ABBREV.__Html.IPagelet;
        }
    }
    module Forkme {
        interface Control {
            get_Body(): __ABBREV.__Html.IPagelet;
        }
        var main : {
            (): __ABBREV.__Html.Element;
        };
    }
    module InsertSnippet {
        interface Control {
            get_Body(): __ABBREV.__Html.IPagelet;
        }
    }
    module Mongo {
        interface Snippet {
            _id: any;
            SnipId: number;
            Title: string;
            MetaDesc: string;
            Desc: string;
            DescHtml: string;
            Tags: string[];
            Date: __ABBREV.__WebSharper.DateTimeProxy;
        }
    }
    module Index {
        module Client {
            var main : {
                (): __ABBREV.__Html.IPagelet;
            };
        }
        interface Control {
            get_Body(): __ABBREV.__Html.IPagelet;
        }
    }
    module Search {
        interface Control {
            get_Body(): __ABBREV.__Html.IPagelet;
        }
    }
    module Model {
        interface Action {
        }
    }
    module ExtJsSkin {
        interface Page {
            Body: any;
        }
    }
    module Skin {
        interface DefaultPage {
            Title: string;
            MetaDescription: string;
            Body: any;
            Footer: any;
        }
    }
    interface Website {
    }
}
declare module __ABBREV {
    
    export import __Html = IntelliFactory.WebSharper.Html;
    export import __List = IntelliFactory.WebSharper.List;
    export import __visualization = google.visualization;
    export import __Dom = IntelliFactory.WebSharper.Dom;
    export import __Html5 = IntelliFactory.WebSharper.Html5;
    export import __WebSharper = IntelliFactory.WebSharper;
}
