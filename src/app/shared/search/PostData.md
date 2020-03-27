## 行政区划

### 请求示例

` http://api.tianditu.gov.cn/administrative?postStr={"searchWord":"北京","searchType":"1","needSubInfo":"false","needAll":"false","needPolygon":"true","needPre":"true"}&tk=您的密钥`

#### 示例返回结果

    {
     "msg": "ok",
     "data": [{
         "lnt": 116.40100299989,
         "adminType": "province",
         "englishabbrevation": "BeiJing",
         "nameabbrevation": "北京",
         "level": 11,
         "cityCode": "156110000",
         "bound": "115.422051,40.978643,117.383319,39.455766",
         "name": "北京市",
         "english": "BeiJing Shi",
         "lat": 39.90311700025,
         "points": [{
             "region": "117.383 40.226,117.203 40.081,116.775 40.034,116.78 39.888,116.92 39.834,116.9 39.687,116.806 39.615,116.563 39.619,116.328 39.456,116.235 39.563,115.918 39.596,115.815 39.508,115.566 39.591,115.48 39.74,115.517 39.898,115.422 39.983,115.589 40.115,115.829 40.144,115.956 40.268,115.766 40.442,115.902 40.616,116.067 40.611,116.213 40.741,116.451 40.797,116.449 40.979,116.672 40.97,116.959 40.708,117.283 40.659,117.223 40.386,117.383 40.226"
         }],
         "parents": {
             "country": {
                 "adminType": "country",
                 "cityCode": "156000000",
                 "name": "中华人民共和国"
             }
         }
     }],
     "returncode": "100",
     "dataversion": "20180719",
     "dataInsertMess": "数据库已存在该版本，不进行导入"
    }
 


### 参数

 <table width="100%" border="0" cellspacing="0" cellpadding="0" class="search_table">
            <tr class="sertr_line1">
                <td width="12%" bgcolor="#2d94e4"><strong>参数名</strong></td>
                <td width="20%" bgcolor="#2d94e4"><strong>必选</strong></td>
                <td width="15%" bgcolor="#2d94e4"><strong>类型</strong></td>
                <td width="41%" bgcolor="#2d94e4"><strong>说明</strong></td>
                <td width="12%" bgcolor="#2d94e4"><strong>默认值</strong></td>
            </tr>
            <tr>
                <td>searchType</td>
                <td>否</td>
                <td>string</td>
                <td>查询关键字。</td>
                <td>无默认值</td>
            </tr>
            <tr>
                <td bgcolor="#f5f5f5">searchType</td>
                <td bgcolor="#f5f5f5">否</td>
                <td bgcolor="#f5f5f5">string</td>
                <td bgcolor="#f5f5f5">查询类型(0：根据code查询，1：根据名称。)。</td>
                <td bgcolor="#f5f5f5">0</td>
            </tr>
            <tr>
                <td>needSubInfo</td>
                <td>否</td>
                <td>boolean</td>
                <td>是否需要下一级信息。</td>
                <td>false</td>
            </tr>
            <tr>
                <td bgcolor="#f5f5f5">needAll</td>
                <td bgcolor="#f5f5f5">否</td>
                <td bgcolor="#f5f5f5">boolean</td>
                <td bgcolor="#f5f5f5">是否需要所有子节点(包括孙子节点..)。</td>
                <td bgcolor="#f5f5f5">false</td>
            </tr>
            <tr>
                <td>needPolygon</td>
                <td>否</td>
                <td>boolean</td>
                <td>是否需要行政区划范围。</td>
                <td>false</td>
            </tr>
            <tr>
                <td bgcolor="#f5f5f5">needPre</td>
                <td bgcolor="#f5f5f5">否</td>
                <td bgcolor="#f5f5f5">boolean</td>
                <td bgcolor="#f5f5f5">是否需要上一级所有信息。</td>
                <td bgcolor="#f5f5f5">false</td>
            </tr>
        </table>
        
        
### 返回参数说明

 <table width="100%" border="0" cellspacing="0" cellpadding="0" class="search_table">
    <tr class="sertr_line1">
        <td width="12%" bgcolor="#2d94e4"><strong>参数名</strong></td>
        <td width="15%" bgcolor="#2d94e4"><strong>类型</strong></td>
        <td width="41%" bgcolor="#2d94e4"><strong>说明</strong></td>  
    </tr>
    <tr>
        <td>msg</td>
        <td>string</td>
        <td>返回消息。</td>
    </tr>
    <tr>
        <td bgcolor="#f5f5f5">dataversion</td>
        <td bgcolor="#f5f5f5">String</td>
        <td bgcolor="#f5f5f5">数据版本(只返回最新数据版本日期)。</td>
    </tr>
    <tr>
        <td>returncode</td>
        <td>string</td>
        <td>100 正常 ； 101 没有查到结果 ；其他异常请看描述。</td>
    </tr>
<tr>
    <td bgcolor="#f5f5f5">data</td>
    <td bgcolor="#f5f5f5">array</td>
    <td bgcolor="#f5f5f5">返回的行政区划信息。</td>
</tr>
</table>   

### data中参数信息

<table width="100%" border="0" cellspacing="0" cellpadding="0" class="search_table">
<tr class="sertr_line1">
    <td width="12%" bgcolor="#2d94e4"><strong>参数名</strong></td>
    <td width="15%" bgcolor="#2d94e4"><strong>类型</strong></td>
    <td width="41%" bgcolor="#2d94e4"><strong>说明</strong></td>
</tr>
<tr>
    <td>lnt</td>
    <td>double</td>
    <td>显示经度 。</td>
</tr>
<tr>
    <td bgcolor="#f5f5f5">lat</td>
    <td bgcolor="#f5f5f5">double</td>
    <td bgcolor="#f5f5f5">显示纬度。</td>
</tr>
 <tr>
    <td>level</td>
    <td>string</td>
    <td>行政区划等级。</td>
</tr>
<tr>
    <td bgcolor="#f5f5f5">name</td>
    <td bgcolor="#f5f5f5">string</td>
    <td bgcolor="#f5f5f5">行政区划名称。</td>
</tr>
     <tr>
    <td>english</td>
    <td>string</td>
    <td>行政区划英文名称。</td>
</tr>
<tr>
    <td bgcolor="#f5f5f5">bound</td>
    <td bgcolor="#f5f5f5">string</td>
    <td bgcolor="#f5f5f5">四角点坐标。</td>
</tr>
 <tr>
    <td>points</td>
    <td>array</td>
    <td>行政区划范围面。</td>
</tr>
<tr>
    <td bgcolor="#f5f5f5">region</td>
    <td bgcolor="#f5f5f5">string</td>
    <td bgcolor="#f5f5f5">行政区划范围。</td>
</tr>
  <tr>
    <td>cityCode</td>
    <td>string</td>
    <td>行政区划码。</td>
</tr>
<tr>
    <td bgcolor="#f5f5f5">adminType</td>
    <td bgcolor="#f5f5f5">string</td>
    <td bgcolor="#f5f5f5">行政区划类别(省市县)。</td>
</tr>
<tr>
    <td>englishabbrevation</td>
    <td>string</td>
    <td>行政区划英文简称。</td>
</tr>
<tr>
    <td bgcolor="#f5f5f5">nameabbrevation</td>
    <td bgcolor="#f5f5f5">string</td>
    <td bgcolor="#f5f5f5">行政区划简称。</td>
</tr>
   <tr>
    <td>parents</td>
    <td>json</td>
    <td>上级行政区划信息。</td>
</tr>
</table>

### parents中参数信息

<table width="100%" border="0" cellspacing="0" cellpadding="0" class="search_table">
            <tr class="sertr_line1">
                <td width="12%" bgcolor="#2d94e4"><strong>参数名</strong></td>
                <td width="15%" bgcolor="#2d94e4"><strong>类型</strong></td>
                <td width="41%" bgcolor="#2d94e4"><strong>说明</strong></td>
             
</tr>
<tr>
    <td>country</td>
    <td>json</td>
    <td>国家。</td>
</tr>
<tr>
    <td bgcolor="#f5f5f5">province</td>
    <td bgcolor="#f5f5f5">json</td>
    <td bgcolor="#f5f5f5">省。</td>
</tr>
  <tr>
    <td>city</td>
    <td>json</td>
    <td>市。</td>
</tr>
</table>

### country中参数信息

<table width="100%" border="0" cellspacing="0" cellpadding="0" class="search_table">
            <tr class="sertr_line1">
                <td width="12%" bgcolor="#2d94e4"><strong>参数名</strong></td>
                <td width="15%" bgcolor="#2d94e4"><strong>类型</strong></td>
                <td width="41%" bgcolor="#2d94e4"><strong>说明</strong></td>
</tr>
<tr>
    <td>name</td>
    <td>string</td>
    <td>行政区划名称。</td>
</tr>
<tr>
    <td bgcolor="#f5f5f5">cityCode</td>
    <td bgcolor="#f5f5f5">string</td>
    <td bgcolor="#f5f5f5">行政区划码。 </td>
</tr>
  <tr>
    <td>adminType</td>
    <td>string</td>
    <td>行政区划类别(省市县)。</td>
</tr>
</table>

### province中参数信息

<table width="100%" border="0" cellspacing="0" cellpadding="0" class="search_table">
            <tr class="sertr_line1">
                <td width="12%" bgcolor="#2d94e4"><strong>参数名</strong></td>
                <td width="15%" bgcolor="#2d94e4"><strong>类型</strong></td>
                <td width="41%" bgcolor="#2d94e4"><strong>说明</strong></td>
             
</tr>
<tr>
    <td>name</td>
    <td>string</td>
    <td>行政区划名称。</td>
</tr>
<tr>
    <td bgcolor="#f5f5f5">cityCode</td>
    <td bgcolor="#f5f5f5">string</td>
    <td bgcolor="#f5f5f5">行政区划码。</td>
</tr>
  <tr>
    <td>adminType</td>
    <td>string</td>
    <td>行政区划类别(省市县)。</td>
</tr>
</table>

### city中参数信息:

 <table width="100%" border="0" cellspacing="0" cellpadding="0" class="search_table">
            <tr class="sertr_line1">
                <td width="12%" bgcolor="#2d94e4"><strong>参数名</strong></td>
                <td width="15%" bgcolor="#2d94e4"><strong>类型</strong></td>
                <td width="41%" bgcolor="#2d94e4"><strong>说明</strong></td>    
</tr>
<tr>
    <td>name</td>
    <td>string</td>
    <td>行政区划名称。</td>
</tr>
<tr>
    <td bgcolor="#f5f5f5">cityCode</td>
    <td bgcolor="#f5f5f5">string</td>
    <td bgcolor="#f5f5f5">行政区划码。</td>
</tr>
  <tr>
    <td>adminType</td>
    <td>string</td>
    <td>行政区划类别(省市县)。</td>
</tr>
</table>
