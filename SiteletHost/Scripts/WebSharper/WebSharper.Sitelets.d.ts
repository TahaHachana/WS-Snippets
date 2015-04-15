declare module WebSharper {
    module Sitelets {
        module Offline {
            interface HtmlCommand {
            }
        }
        module Sitelet {
            interface Filter<_T1> {
                VerifyUser: {
                    (x: string): boolean;
                };
                LoginRedirect: {
                    (x: _T1): _T1;
                };
            }
        }
        module Content {
            module Template {
                interface LoadFrequency {
                }
            }
        }
        module ActionEncoding {
            interface DecodeResult<_T1> {
            }
            interface NoFormatError {
            }
            interface Format<_T1> {
                read: {
                    (x: string): {
                        (x: any): __ABBREV.__WebSharper.OptionProxy<__ABBREV.__ActionEncoding.DecodeResult<__ABBREV.__WebSharper.ObjectProxy>>;
                    };
                };
                show: {
                    (x: __ABBREV.__WebSharper.ObjectProxy): __ABBREV.__WebSharper.OptionProxy<string>;
                };
            }
        }
        module Http {
            interface Method {
            }
            interface Version {
                Version: number;
            }
            interface Header {
                name: string;
                value: string;
            }
            interface Request {
                Method: __ABBREV.__Http.Method;
                Uri: any;
                Headers: __ABBREV.__WebSharper.seq<any>;
                Post: any;
                Get: any;
                Cookies: any;
                ServerVariables: any;
                Body: any;
                Files: __ABBREV.__WebSharper.seq<any>;
            }
            interface Status {
                SCode: number;
                SMessage: string;
            }
            interface Response {
                Status: any;
                Headers: __ABBREV.__WebSharper.seq<any>;
                WriteBody: {
                    (x: any): void;
                };
            }
        }
        interface Page {
            Doctype: __ABBREV.__WebSharper.OptionProxy<string>;
            Title: __ABBREV.__WebSharper.OptionProxy<string>;
            Renderer: {
                (x: __ABBREV.__WebSharper.OptionProxy<string>): {
                    (x: __ABBREV.__WebSharper.OptionProxy<string>): {
                        (x: {
                            (x: any): void;
                        }): {
                            (x: {
                                (x: any): void;
                            }): {
                                (x: any): void;
                            };
                        };
                    };
                };
            };
            Head: __ABBREV.__WebSharper.seq<any>;
            Body: __ABBREV.__WebSharper.seq<any>;
        }
        interface Router<_T1> {
            StaticRoutes: any;
            StaticLinks: any;
            DynamicRoute: {
                (x: any): __ABBREV.__WebSharper.OptionProxy<_T1>;
            };
            DynamicLink: {
                (x: _T1): __ABBREV.__WebSharper.OptionProxy<any>;
            };
        }
        interface Context<_T1> {
            ApplicationPath: string;
            Link: {
                (x: _T1): string;
            };
            Json: any;
            Metadata: any;
            ResolveUrl: {
                (x: string): string;
            };
            ResourceContext: any;
            Request: any;
            RootFolder: string;
            UserSession: __ABBREV.__Web.IUserSession;
        }
        interface Content1<_T1> {
        }
        interface Controller<_T1> {
            Handle: {
                (x: _T1): __ABBREV.__Sitelets.Content1<_T1>;
            };
        }
        interface Sitelet1<_T1> {
            Router: any;
            Controller: any;
        }
        interface IWebsite<_T1> {
            get_Actions(): __ABBREV.__List.T<_T1>;
            get_Sitelet(): any;
        }
        interface SinglePageAction {
        }
        interface SinglePageWebsite {
        }
        interface IHostedWebsite<_T1> {
            Build(x0: any): __ABBREV.__Sitelets.IWebsite<_T1>;
        }
        interface HttpHandler {
        }
        interface HttpModule {
        }
    }
}
declare module __ABBREV {
    
    export import __WebSharper = WebSharper;
    export import __ActionEncoding = WebSharper.Sitelets.ActionEncoding;
    export import __Http = WebSharper.Sitelets.Http;
    export import __Web = WebSharper.Web;
    export import __Sitelets = WebSharper.Sitelets;
    export import __List = WebSharper.List;
}
