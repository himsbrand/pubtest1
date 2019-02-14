"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const ClassBase_1=require("./ClassBase"),FIXED_CALC_OBJECT_NAME="__FIXED_CALC__object_name__";class XtrFixedDosCalcBase extends ClassBase_1.ClassBase{constructor(){super(),this.__OBJECT_IDENTIFY_KEY__=FIXED_CALC_OBJECT_NAME,this.fixed_objectName=FIXED_CALC_OBJECT_NAME}didDestroy(){super.didDestroy(),this.m_piFdc=null}GetIFixedIndexData(){let t=this,e=t.m_piIndexData;return t.m_piFdc&&t.m_piFdc.piIndexData&&(e=t.m_piFdc.piIndexData),e}SetPlotName(t,e){let a=this.GetIFixedIndexData();a&&a.SetPlotName(t,e)}SetParamData(t,e,a){let r=this.GetIFixedIndexData();r&&r.SetParamData(t,e,a)}GetParamDatas(t){let e=this.GetIFixedIndexData();if(e)return e.GetParamDatas(t)}GetParamData(t,e){let a=this.GetIFixedIndexData();if(a)return a.GetParamData(t,e)}didInitPlots(){}didInitParameters(){}didReloadParameters(){try{let t=this,e=t.GetIFixedIndexData();if(e){let a;t.m_piFdc&&(a=t.m_piFdc.parameters={}),e.GetParamDatas(a)}}catch(t){throw t}}didResetVariables(t){}ProcPlot(t,e){}SetConfigObject(t){this.m_piFdc=t}PreLoad(t){return this.m_piIndexData=t,this.didInitPlots(),this.didInitParameters(),!0}Init(t,e){try{let t=this;t.m_piFdc=e,t.didReloadParameters(),t.didResetVariables(t.m_piFdc)}catch(t){throw t}return!0}Start(t,e){try{this.ProcPlot(!1,t)}catch(t){throw t}return!0}AfterProc(t,e){return!0}Update(t,e){try{this.ProcPlot(!0,t)}catch(t){throw t}return!0}GetDataO(t){if(t=t||this.GetIFixedIndexData())return t.GetIPriceVectorRef("o")}GetDataH(t){if(t=t||this.GetIFixedIndexData())return t.GetIPriceVectorRef("h")}GetDataL(t){if(t=t||this.GetIFixedIndexData())return t.GetIPriceVectorRef("l")}GetDataC(t){if(t=t||this.GetIFixedIndexData())return t.GetIPriceVectorRef("c")}GetDataV(t){if(t=t||this.GetIFixedIndexData())return t.GetIPriceVectorRef("v")}GetDataD(t){if(t=t||this.GetIFixedIndexData())return t.GetIPriceVectorRef("date")}GetDataAmount(t){if(t=t||this.GetIFixedIndexData())return t.GetIPriceVectorRef("amt")}GetDataOI(t){if(t=t||this.GetIFixedIndexData())return t.GetIPriceVectorRef("oi")}GetResultAt(t,e){if(e=e||this.GetIFixedIndexData())return e.GetIResultAt(t)}GetPlotDataAt(t,e){return this.GetResultAt(t,e)}GetLocalStaticVar(){let t=this;if(t.m_piFdc)return t.m_piFdc.localStaticVar}GetParameters(){let t=this;if(t.m_piFdc)return t.m_piFdc.parameters}}exports.XtrFixedDosCalcBase=XtrFixedDosCalcBase;