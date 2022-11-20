(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{443:function(t,_,v){"use strict";v.r(_);var e=v(44),a=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"goinception用户鉴权"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#goinception用户鉴权"}},[t._v("#")]),t._v(" goinception用户鉴权")]),t._v(" "),v("h3",{attrs:{id:"说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),v("p",[t._v("goinception本身基于TiDB，所以拥有完整的用户管理模块，为了简单使用，默认是关闭该功能的。")]),t._v(" "),v("p",[v("strong",[t._v("开启鉴权方法:")])]),t._v(" "),v("p",[t._v("在 config.toml 配置文件添加以下参数(文件根节点或者[inc]节点)")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("skip_grant_table = false\n")])])]),v("p",[t._v("相应的语法支持如下:")]),t._v(" "),v("ul",[v("li",[t._v("CREATE USER")]),t._v(" "),v("li",[t._v("DROP USER")]),t._v(" "),v("li",[t._v("ALTER USER")]),t._v(" "),v("li",[t._v("SET PASSWORD FOR")]),t._v(" "),v("li",[t._v("GRANT/REVOKE "),v("code",[t._v("可能用不到")])]),t._v(" "),v("li",[t._v("SELECT * FROM MYSQL.USER "),v("code",[t._v("用户查询")])])]),t._v(" "),v("p",[v("code",[t._v("默认初始用户为root, 密码为空")])]),t._v(" "),v("p",[t._v("忘记密码后可以通过跳过鉴权的方式重新启动，修改密码后开启鉴权并重启goinception。")]),t._v(" "),v("p",[t._v("在非正常关闭时数据目录(默认为"),v("code",[t._v("/tmp/tidb")]),t._v(")可能损坏，此时需要删除该目录并重启，但已创建用户会丢失，因此请注意备份该目录或保存用户创建脚本。")]),t._v(" "),v("p",[t._v("该功能是唯一需要注意保存数据目录的，其他功能均不需要。")])])}),[],!1,null,null,null);_.default=a.exports}}]);