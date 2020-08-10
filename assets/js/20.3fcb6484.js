(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{223:function(e,a,t){"use strict";t.r(a);var r=t(0),o=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"page-frontmatter-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#page-frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$page.frontmatter.title))]),e._v(" "),t("p",[e._v(e._s(e.$page.frontmatter.abstract))]),e._v(" "),t("MetadataTable"),e._v(" "),t("h2",{attrs:{id:"language"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#language"}},[e._v("#")]),e._v(" Language")]),e._v(" "),t("Language"),e._v(" "),t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("Different kinds of data need different data and metadata formats. To support these different data and metadata formats we need to extend and specialise the generic Data Package. These specialized types of Data Package (or Data Resource) are termed "),t("strong",[e._v("profiles")]),e._v(". For example, there is a "),t("a",{attrs:{href:"http://frictionlessdata.io/specs/tabular-data-package/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tabular Data Package"),t("OutboundLink")],1),e._v(" profile that specializes Data Packages specifically for tabular data.")]),e._v(" "),t("p",[e._v("Thus, every Package and Resource descriptor has a profile. The namespace for the profile is the type of descriptor, so the default profile, if none is declared, is "),t("code",[e._v("data-package")]),e._v(" for a Package descriptor and "),t("code",[e._v("data-resource")]),e._v(" for a Resource descriptor.")]),e._v(" "),t("p",[e._v("In summary, an extension of Data Package may be formalised as a profile. A profile is a Data Package which extends the default specification towards more specific needs.")]),e._v(" "),t("h2",{attrs:{id:"profile-property"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#profile-property"}},[e._v("#")]),e._v(" "),t("code",[e._v("profile")]),e._v(" Property")]),e._v(" "),t("p",[e._v("In addition to the concept, we need an explicit way for publishers to state the profile they are using and consumers to discover this.")]),e._v(" "),t("p",[e._v("Thus, we have a "),t("code",[e._v("profile")]),e._v(" property that declares the profile for the descriptor for this Package or Resource. For the default Data Package and Data Resource descriptor, this SHOULD be present with a value of "),t("code",[e._v("data-package")]),e._v("/"),t("code",[e._v("data-resource")]),e._v(", but if not, the absence of a profile is equivalent to setting "),t("code",[e._v('"profile": "data-package"')]),e._v("/ "),t("code",[e._v('"profile": "data-resource"')]),e._v(".")]),e._v(" "),t("p",[e._v("Custom profiles MUST have a profile property, where the value is a unique identifier for that profile. This unique identifier "),t("code",[e._v("MUST")]),e._v(" be a string and can be in one of two forms. It can be an id from the official "),t("a",{attrs:{href:"http://frictionlessdata.io/schemas/registry.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("Data Package Schema Registry"),t("OutboundLink")],1),e._v(", or, a fully-qualified URL that points directly to a JSON Schema that can be used to validate the profile.")]),e._v(" "),t("p",[e._v("As part of the Frictionless Data Specifications project, we publish a number of Data Package profiles such as:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://frictionlessdata.io/specs/tabular-data-package/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tabular Data Package"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://frictionlessdata.io/specs/fiscal-data-package/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fiscal Data Package"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("We also publish the following Data Resource profiles:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://frictionlessdata.io/specs/tabular-data-resource/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tabular Data Resource"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);a.default=o.exports}}]);