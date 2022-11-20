(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{408:function(t,a,s){"use strict";s.r(a);var e=s(44),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h4",{attrs:{id:"config-toml-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-toml-description"}},[t._v("#")]),t._v(" config.toml description")]),t._v(" "),s("p",[t._v("goInception run by "),s("code",[t._v("./goInception -config=config/config.toml")]),t._v(", this document show the detail of the configuration file.")]),t._v(" "),s("p",[s("strong",[t._v("goInception based on some TiDB source code, so some config parameters can check TiDB documents")])]),t._v(" "),s("p",[s("code",[t._v("config.toml")]),t._v(" contains general config such as "),s("code",[t._v("host")]),t._v(" and "),s("code",[t._v("port")]),t._v(", and group config block such as "),s("code",[t._v("[inc]")]),t._v(" and "),s("code",[t._v("[log]")]),t._v(" etc.")]),t._v(" "),s("p",[t._v("Demo(the demo blow just shows the structure of config file, "),s("a",{attrs:{href:"https://github.com/hanchuanchuan/goInception/blob/master/config/config.toml.default",target:"_blank",rel:"noopener noreferrer"}},[t._v("see details"),s("OutboundLink")],1),t._v(")")]),t._v(" "),s("div",{staticClass:"language-toml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("host")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("port")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("path")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/tmp/tidb"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# log setting")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("level")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"info"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("format")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("log.file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# log file setting")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("filename")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("max-size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("inc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# audit option")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("enable_nullable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("enable_drop_table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("check_table_comment")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("check_column_comment")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("osc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pt-osc options")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("osc_on")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("osc_min_table_size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("ghost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gh-ost options")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ghost_allow_on_master")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"host"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[t._v("#")]),t._v(" host")]),t._v(" "),s("p",[t._v("IP address, default "),s("code",[t._v("0.0.0.0")])]),t._v(" "),s("h3",{attrs:{id:"port"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[t._v("#")]),t._v(" port")]),t._v(" "),s("p",[t._v("Service port, default "),s("code",[t._v("4000")])]),t._v(" "),s("h3",{attrs:{id:"path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[t._v("#")]),t._v(" path")]),t._v(" "),s("p",[t._v("TiDB date path, create some TiDB system table. If null, create in memory. Advice to set a specific data path for speed up start.")]),t._v(" "),s("h3",{attrs:{id:"inc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inc"}},[t._v("#")]),t._v(" [inc]")]),t._v(" "),s("p",[t._v("all "),s("strong",[s("a",{attrs:{href:"../options"}},[t._v("audit options")])]),t._v(" in here")]),t._v(" "),s("h3",{attrs:{id:"osc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#osc"}},[t._v("#")]),t._v(" [osc]")]),t._v(" "),s("p",[t._v("all "),s("strong",[s("a",{attrs:{href:"../osc"}},[t._v("pt-osc options")])]),t._v(" in here")]),t._v(" "),s("h3",{attrs:{id:"gh-ost"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gh-ost"}},[t._v("#")]),t._v(" [gh-ost]")]),t._v(" "),s("p",[t._v("all "),s("strong",[s("a",{attrs:{href:"../ghost"}},[t._v("gh-ost options")])]),t._v(" in here")]),t._v(" "),s("h3",{attrs:{id:"log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[t._v("#")]),t._v(" [log]")]),t._v(" "),s("h5",{attrs:{id:"level"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#level"}},[t._v("#")]),t._v(" level")]),t._v(" "),s("p",[t._v("log level,default "),s("code",[t._v("info")]),t._v("\noption: "),s("code",[t._v("debug")]),t._v(", "),s("code",[t._v("info")]),t._v(", "),s("code",[t._v("warn")]),t._v(", "),s("code",[t._v("error")]),t._v(".")]),t._v(" "),s("h5",{attrs:{id:"format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#format"}},[t._v("#")]),t._v(" format")]),t._v(" "),s("p",[t._v("log format,default "),s("code",[t._v("text")]),t._v("\noption: "),s("code",[t._v("json")]),t._v(", "),s("code",[t._v("text")]),t._v(", "),s("code",[t._v("console")])]),t._v(" "),s("h5",{attrs:{id:"disable-timestamp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disable-timestamp"}},[t._v("#")]),t._v(" disable-timestamp")]),t._v(" "),s("p",[t._v("Diable timestamp, default "),s("code",[t._v("false")])]),t._v(" "),s("h3",{attrs:{id:"log-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log-file"}},[t._v("#")]),t._v(" [log.file]")]),t._v(" "),s("h5",{attrs:{id:"filename"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filename"}},[t._v("#")]),t._v(" filename")]),t._v(" "),s("p",[t._v('log file name, default "",\nadvice to set specific log file name for tracing.')]),t._v(" "),s("h5",{attrs:{id:"max-size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#max-size"}},[t._v("#")]),t._v(" max-size")]),t._v(" "),s("p",[t._v("Max size of log file, default "),s("code",[t._v("300MB")])]),t._v(" "),s("h5",{attrs:{id:"max-days"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#max-days"}},[t._v("#")]),t._v(" max-days")]),t._v(" "),s("p",[t._v("Max days of log file keep. default "),s("code",[t._v("0")]),t._v(", it means keep all log files..")]),t._v(" "),s("h5",{attrs:{id:"max-backups"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#max-backups"}},[t._v("#")]),t._v(" max-backups")]),t._v(" "),s("p",[t._v("Max numbers of log file keep. default "),s("code",[t._v("0")]),t._v(", it means keep all log files.")]),t._v(" "),s("h5",{attrs:{id:"log-rotate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log-rotate"}},[t._v("#")]),t._v(" log-rotate")]),t._v(" "),s("p",[t._v("If turn on log rotate, default "),s("code",[t._v("true")]),t._v(", it means turn on.")])])}),[],!1,null,null,null);a.default=n.exports}}]);