declare module Website {
    module Highlight {
        module Server {
            interface Token {
            }
        }
        interface Result {
        }
        interface Control {
            get_Body(): __ABBREV.__Html.IPagelet;
        }
    }
    module Js {
        module Snippet9 {
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
        module Snippet8 {
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
        module Snippet7 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet6 {
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
        module Snippet5 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
        module Snippet4 {
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
        module Snippet3 {
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
    module Twitter {
        module Snippet1 {
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
    }
    module Geolocation {
        module Snippet1 {
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
    }
    module Google {
        module Snippet3 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
            var map : {
                (): __ABBREV.__Html.Element;
            };
        }
        module Snippet2 {
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
        module Snippet1 {
            interface Control {
                get_Body(): __ABBREV.__Html.IPagelet;
            }
        }
    }
    module JQueryUI {
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
        module LoginInfo {
            var New : {
                (username: string, password: string): __ABBREV.__Login.LoginInfo;
            };
        }
        module Client {
            var loginPiglet : {
                <_M1>(init: __ABBREV.__Login.LoginInfo): __ABBREV.__Piglets.Piglet<__ABBREV.__Login.LoginInfo, {
                    (x: {
                        (x: __ABBREV.__Piglets.Stream<string>): {
                            (x: __ABBREV.__Piglets.Stream<string>): {
                                (x: __ABBREV.__Piglets.Submitter<__ABBREV.__Login.LoginInfo>): _M1;
                            };
                        };
                    }): _M1;
                }>;
            };
            var loginRender : {
                <_M1>(name: __ABBREV.__Piglets.Stream<string>, password: __ABBREV.__Piglets.Stream<string>, submit: __ABBREV.__Piglets.Submitter<_M1>): __ABBREV.__Html.Element;
            };
            var form : {
                (redirectUrl: string): __ABBREV.__Html.Element;
            };
        }
        interface LoginInfo {
            Username: string;
            Password: string;
        }
        interface Access {
        }
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
    module NewSnippet {
        module Client {
            var tagPiglet : {
                <_M1>(init: string): __ABBREV.__Piglets.Piglet<string, {
                    (x: {
                        (x: __ABBREV.__Piglets.Stream<string>): _M1;
                    }): _M1;
                }>;
            };
            var snippetPiglet : {
                <_M1, _M2>(init: any): __ABBREV.__Piglets.Piglet<any, {
                    (x: {
                        (x: __ABBREV.__Piglets.Stream<string>): {
                            (x: __ABBREV.__Piglets.Stream<string>): {
                                (x: __ABBREV.__Piglets.Stream<string>): {
                                    (x: __ABBREV.__Piglets.Stream<string>): {
                                        (x: __ABBREV.__Piglets.Stream<string>): {
                                            (x: __ABBREV.__Piglets.Stream<string>): {
                                                (x: __ABBREV.__Many.UnitStream<string, {
                                                    (x: __ABBREV.__Piglets.Stream<string>): _M1;
                                                }, _M1>): {
                                                    (x: __ABBREV.__Piglets.Submitter<any>): _M2;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    }): _M2;
                }>;
            };
            var tagView : {
                (tag: __ABBREV.__Piglets.Stream<string>): __ABBREV.__Html.Element;
            };
            var Button : {
                (writer: __ABBREV.__Piglets.Writer<string>): __ABBREV.__Html.Element;
            };
            var snippetView : {
                <_M1, _M2, _M3>(id: __ABBREV.__Piglets.Stream<string>, title: __ABBREV.__Piglets.Stream<string>, url: __ABBREV.__Piglets.Stream<string>, metaDescription: __ABBREV.__Piglets.Stream<string>, description: __ABBREV.__Piglets.Stream<string>, descriptionHtml: __ABBREV.__Piglets.Stream<string>, tags: __ABBREV.__Many.Stream<string, {
                    (x: __ABBREV.__Piglets.Stream<string>): __ABBREV.__Html.Element;
                }, __ABBREV.__Html.Element, _M1, _M2>, submit: __ABBREV.__Piglets.Submitter<_M3>): __ABBREV.__Html.Element;
            };
            var form : {
                (): __ABBREV.__Html.Element;
            };
        }
        interface NewSnippet {
            Id: string;
            Title: string;
            Url: string;
            MetaDescription: string;
            Description: string;
            DescriptionHtml: string;
            Tags: string[];
        }
        interface Control {
            get_Body(): __ABBREV.__Html.IPagelet;
        }
    }
    module Mongo {
        interface Snippet {
            _id: any;
            SnipId: number;
            Title: string;
            Url: string;
            MetaDesc: string;
            Desc: string;
            DescHtml: string;
            Tags: string[];
            Date: __ABBREV.__WebSharper.DateTimeProxy;
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
declare module Html5 {
    module Snippet14 {
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
        interface Control {
            get_Body(): __ABBREV.__Html.IPagelet;
        }
    }
    module Snippet10 {
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
    module Snippet9 {
        interface Control {
            get_Body(): __ABBREV.__Html.IPagelet;
        }
        var main : {
            (): __ABBREV.__Html.Element;
        };
    }
    module Snippet8 {
        interface Control {
            get_Body(): __ABBREV.__Html.IPagelet;
        }
        var main : {
            (): __ABBREV.__Html.Element;
        };
    }
    module Snippet7 {
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
    module Snippet6 {
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
    module Snippet3 {
        module Client {
            var main : {
                (): __ABBREV.__Html.Element;
            };
        }
        interface Control {
            get_Body(): __ABBREV.__Html.IPagelet;
        }
    }
    module Snippet2 {
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
    module Snippet1 {
        interface Control {
            get_Body(): __ABBREV.__Html.IPagelet;
        }
    }
}
declare module __ABBREV {
    
    export import __Html = IntelliFactory.WebSharper.Html;
    export import __WebSharper = IntelliFactory.WebSharper;
    export import __Html5 = IntelliFactory.WebSharper.Html5;
    export import __List = IntelliFactory.WebSharper.List;
    export import __visualization = google.visualization;
    export import __Dom = IntelliFactory.WebSharper.Dom;
    export import __Login = Website.Login;
    export import __Piglets = IntelliFactory.WebSharper.Piglets;
    export import __Many = IntelliFactory.WebSharper.Piglets.Many;
}
