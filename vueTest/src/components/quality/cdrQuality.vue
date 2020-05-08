<template>
  <div class="fullScreen">
    <header style="height: 48px;background:rgba(248,248,248,1);">
      <div style="transform: translateY(-50%);position: relative;top: 50%;margin-left: 2%;height:40px;line-height: 40px;">
        <el-radio-group v-model="timeRange" @change="changeTime">
          <el-radio label="1" >一天内</el-radio>
          <el-radio label="3" >三天内</el-radio>
          <el-radio label="week" >一周内</el-radio>
          <el-radio label="month" >一月内</el-radio>
          <el-radio label="custom" >自定义时间段</el-radio>
        </el-radio-group>
        <span v-show="timeRange=='custom'">
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="block" >
                      <el-date-picker style="width:124px;"
                                      v-model="timeFrom"
                                      type="date"
                                      size="mini"
                                      placeholder="选择日期" @change="timeFromChange" value-format="yyyy-MM-dd">
                      </el-date-picker>
                    </span>
                    &nbsp;&nbsp;至&nbsp;&nbsp;
                    <span class="block" >
                      <el-date-picker style="width:124px;"
                                      v-model="timeEnd"
                                      type="date"
                                      size="mini"
                                      placeholder="选择日期" @change="timeEndChange" value-format="yyyy-MM-dd">
                      </el-date-picker>
                    </span>
            </span>
      </div>
    </header>
    <section style="position: relative;height: calc(40% - 24px);">
      <div style="width:94%;height:86%;position: absolute;top:10%;left:3%;">
        <div style="width:25%;height:100%;position: absolute;left:0;">
          <div style="height:90%;width: 60%;position: absolute;top:4%;left: 10%;box-shadow:0px 0px 5px rgb(178,176,179);border-radius: 10px 10px 10px 10px;">
            <div :style="'height: 60%;width:100%;border-radius: 10px 10px 0 0;background:'+ bgColor">
              <div style="font-size: 5vw;position: absolute;top:5%;color:white;width: 100%;text-align: center;">{{avgScore}}</div>
              <div style="font-size: 0.8vw;color:white;position: absolute;top:45%;width: 100%;text-align: center;">最高：{{maxScore}}丨最低：{{minScore}}</div>
            </div>
            <div style="height: 40%;width:100%;position: relative;">
              <div style="font-size: 0.8vw;position: absolute;top:25%;width: 100%;text-align: center;">基础项目（{{baseItemPercent}}%）：<span :style="'font-weight: bold;color:'+baseItemColor">{{baseItemScore}}</span></div>
              <div style="font-size: 0.8vw;position: absolute;top:55%;width: 100%;text-align: center;">选择项目（{{chooseItemPercent}}%）：<span :style="'font-weight: bold;color:'+chooseItemColor">{{chooseItemScore}}</span></div>
            </div>
          </div>
        </div>
        <div style="width:75%;height:100%;position: absolute;left:25%;">
          <div style="width:14%;height: 100%;position: absolute;left: 0;">
            <div id="consistency" style="width:100%;height: 100%;">

            </div>
          </div>

          <div style="width:14%;height: 100%;position: absolute;left: 14.28%;">
            <div id="integrity" style="width:100%;height: 100%;">

            </div>
          </div>

          <div style="width:14%;height: 100%;position: absolute;left: 28.56%;">
            <div id="integration" style="width:100%;height: 100%;">

            </div>
          </div>

          <div style="width:14%;height: 100%;position: absolute;left: 42.84%;">
            <div id="timeliness" style="width:100%;height: 100%;">

            </div>
          </div>

          <div style="width:14%;height: 100%;position: absolute;left: 57.12%;">
            <div id="accurate" style="width:100%;height: 100%;">

            </div>
          </div>

          <div style="width:14%;height: 100%;position: absolute;left: 71.4%;">
            <div id="unique" style="width:100%;height: 100%;">

            </div>
          </div>

          <div style="width:14%;height: 100%;position: absolute;left: 85.68%;">
            <div id="specification" style="width:100%;height: 100%;">

            </div>
          </div>
        </div>




      </div>
    </section>
    <section class="border"></section>
    <footer style="position: relative;height:calc(61% - 39px);">
      <section style="position: absolute;border:1px solid rgba(228, 228, 228, 1);left:3%;top:8%;right:70%;height:90%;">
        <div class="qualityTitle">
          <div class="iconfont" style="display:inline-block;margin:0 10px 0 20px;float:left;font-size: 1.5vw;color:#078BDE;">&#xe6d1;
          </div>
          <span style="font-size: 1vw;">稽核规则分布</span>
        </div>
        <div style="width:100%;height: calc(100% - 2.5vw);position: absolute;left: 0;top:2.5vw;">
          <div id="jiHeRule" style="width:100%;height: 100%;">

          </div>
        </div>



      </section>
      <section style="position: absolute;border:1px solid rgba(228, 228, 228, 1);left:32%;top:8%;right:3%;height:90%;">
        <div class="qualityTitle">
          <div class="iconfont" style="display:inline-block;margin:0 10px 0 20px;float:left;font-size: 1.5vw;color:#078BDE;">&#xe6d3;
          </div>
          <span style="font-size: 1vw;">数据质量趋势图</span>
        </div>
        <div style="width:100%;height: calc(100% - 2.5vw);position: absolute;left: 0;">
          <div style="position: absolute;left:1%;right:1%;top:4%;z-index:9999;height:10%;">
<!--                    <span style="float:left;z-index:9999;height:10%;">时间：-->
<!--                      <el-select v-model="dataQualityTrendTime" placeholder="请选择" style="width:35%;font-size:0.1vw;" size="mini">-->
<!--                        <el-option-->
<!--                          v-for="item in timeOptions"-->
<!--                          :key="item.value"-->
<!--                          :label="item.label"-->
<!--                          :value="item.value">-->
<!--                        </el-option>-->
<!--                      </el-select>-->
<!--                    </span>-->

<!--            <span style="float:left;margin-left:10px;font-size:0.2vw;">等级：-->
<!--                    <el-select v-model="dataQualityTrendLevel" placeholder="请选择" style="width:35%;" size="mini" clearable @change="changeLevelFunction" :disabled="chooseDisabled">-->
<!--                      <el-option-->
<!--                        v-for="item in levelOptions"-->
<!--                        :key="item.value"-->
<!--                        :label="item.label"-->
<!--                        :value="item.value">-->
<!--                      </el-option>-->
<!--                    </el-select>-->
<!--                  </span>-->



            <span style="float:left;margin-left:10px;font-size:0.2vw;display:none;">等级：
                    <el-select v-model="dataQualityTrendLevel" placeholder="请选择" style="" size="mini" clearable @change="changeLevelFunction" :disabled="chooseDisabled">
                      <el-option
                              v-for="item in levelOptions"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                      </el-option>
                    </el-select>
                  </span>

            <span style="float:left;margin-left:10px;font-size:0.2vw;">项目分类：
                    <el-select v-model="dataQualityProject" placeholder="请选择" style="" size="mini" clearable @change="changeChooseFunction" :disabled="chooseDisabled">
                      <el-option
                        v-for="item in projectOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </span>


            <span style="position: absolute;right:0%;top:15%;left:200px;">
                       <el-checkbox-group
                               v-model="checkedTypes" @change="changeType" :disabled="chooseDisabled">
                            <el-checkbox v-for="oneType in types" :label="oneType.ID" :key="oneType.ID" :value="oneType.ID">{{oneType.NAME}}</el-checkbox>
                      </el-checkbox-group>
                  </span>

            <div style="margin-top:40px;float:right;margin-right: 0px;" v-show="chooseDisabled">{{trendTitle}}详情<img @click="returnData" style="height:20px;cursor:pointer;vertical-align: middle;" :src="require('../../assets/images/back.png')" title="返回月视图" /></div>



          </div>
          <div id="dataQualityTrend" style="width:100%;height: 90%;position: absolute;top:10%;overflow:hidden;">

          </div>
        </div>
      </section>
      </footer>
  </div>
</template>

<script>
  export default {
    name: "emrQuality",
    data(){
      return {
        scoreColorRed:'rgb(252, 78, 78)',
        scoreColorYellow:'rgb(255, 169, 4)',
        scoreColorGreen:'rgb(58, 184, 100)',

        timeRange:'month',
        timeFrom:'',
        timeEnd:'',

        avgScore:'0',
        maxScore:'0',
        minScore:'0',
        bgColor:'',
        baseItemPercent:'0',
        chooseItemPercent:'0',
        baseItemScore:'0',
        chooseItemScore:'0',
        baseItemColor:'',
        chooseItemColor:'',

        consistencyShow:false,
        integrityShow:false,
        integrationShow:false,
        timelinessShow:false,



        formatType:'month',
        timeOptions:[{value:'month',label:'月'},{value:'week',label:'星期'},{value:'day',label:'天'}],
        levelOptions:[{value:'0',label:'全部'},{value:'3',label:'3级'},{value:'4',label:'4级'},{value:'5',label:'5级'},{value:'6',label:'6级'},{value:'7',label:'7级'}],
        projectOptions:[{value:'0',label:'全部'},{value:'1',label:'基础项目'},{value:'2',label:'选择项目'}],
        types:[{ID:'0',NAME:'综合'}],
        checkedTypes:['0'],
        dataQualityTrendTime:'',
        dataQualityTrendLevel:'0',
        dataQualityProject:'0',
        consistencyCircle:'',
        integrityCircle:'',
        integrationCircle:'',
        timelinessCircle:'',
        accurateCircle:'',
        uniqueCircle:'',
        speciticationCircle:'',


        jiHeRule:'',
        dataQualityTrend:'',

        optionDataQualityTrend:'',
        triangleShow:1,
        chooseDisabled:false,
        optionDataQualityTrendHistory: null,
        trendTitle:""
      }
    },
    methods:{
      changeTime(value){
        if (value != "custom") {
          this.getFirstLeft();
          this.getSecondRight();
        }
      },
      timeFromChange(value){
        if (this.timeFrom != "" && this.timeFrom != null && this.timeEnd != "" && this.timeEnd != null) {
          this.getFirstLeft();
          this.getSecondRight();
        }
      },
      timeEndChange(value) {
        if (this.timeFrom != "" && this.timeFrom != null && this.timeEnd != "" && this.timeEnd != null) {
          this.getFirstLeft();
          this.getSecondRight();
        }
      },
      getColor(score){
        if (score >= 90) {
          return this.scoreColorGreen;
        }
        if (score <= 50) {
          return this.scoreColorRed;
        }
        return this.scoreColorYellow;
      },

      getFirstLeft:function(){
        let ths = this;
        ths.$axios({
          method: 'post',
          url: '/hip-dqms/cdrQualityController/itemDetail',
          data: {
            timeRange: ths.timeRange,
            timeFrom: ths.timeFrom,
            timeEnd: ths.timeEnd,
          }
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            if (res.data.data.scoreTop != null) {

              if (res.data.data.scoreTop.MAXSCORE != null) {
                ths.maxScore = res.data.data.scoreTop.MAXSCORE;
              }

              if (res.data.data.scoreTop.MINSCORE != null) {
                ths.minScore = res.data.data.scoreTop.MINSCORE;
              }

              if (res.data.data.scoreTop.AVGSCORE != null) {
                ths.avgScore = res.data.data.scoreTop.AVGSCORE;
                ths.bgColor = ths.getColor(ths.avgScore);
              }
            } else {
                ths.maxScore = 0;
                ths.minScore = 0;
                ths.avgScore = 0;
                ths.bgColor = ths.getColor(ths.avgScore);
            }

            if (res.data.data.baseItemPercent != null) {
              ths.baseItemPercent = res.data.data.baseItemPercent;
            }
            if (res.data.data.chooseItemPercent != null) {
              ths.chooseItemPercent = res.data.data.chooseItemPercent;
            }
            if (res.data.data.itemBaseScore != null) {
              ths.baseItemScore = res.data.data.itemBaseScore;
              ths.baseItemColor = ths.getColor(res.data.data.itemBaseScore);
            }else {
              ths.baseItemColor = ths.getColor(0);
            }
            if (res.data.data.itemChoosedScore != null) {
              ths.chooseItemScore = res.data.data.itemChoosedScore;
              ths.chooseItemColor = ths.getColor(res.data.data.itemChoosedScore);
            }else {
              ths.chooseItemColor = ths.getColor(0);
            }
          } else {
            ths.$message({
              message: '获取电子病历数据质量第一行左边数据失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });
      },

      getSecondRight:function(){
        let ths = this;
        ths.$axios({
          method: 'post',
          url: '/hip-dqms/cdrQualityController/detailScore',
          data: {
            timeRange: ths.timeRange,
            timeFrom: ths.timeFrom,
            timeEnd: ths.timeEnd,
          }
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            var detailScore = res.data.data.detailScore;
            detailScore.forEach((x, y) => {
              if ("一致性" == x.NAME) {
                if (x.SCORE == undefined) {
                  x.SCORE = 0;
                }
                ths.initConsistencyCircle(x.SCORE, ths.getColor(x.SCORE));
              } else if ("完整性" == x.NAME) {
                if (x.SCORE == undefined) {
                  x.SCORE = 0;
                }
                ths.initIntegrityCircle(x.SCORE, ths.getColor(x.SCORE));
              } else if ("整合性" == x.NAME) {
                if (x.SCORE == undefined) {
                  x.SCORE = 0;
                }
                ths.initIntegrationCircle(x.SCORE, ths.getColor(x.SCORE));
              } else if ("及时性" == x.NAME) {
                if (x.SCORE == undefined) {
                  x.SCORE = 0;
                }
                ths.initTimelinessCircle(x.SCORE, ths.getColor(x.SCORE));
              } else if ("准确性" == x.NAME) {
                if (x.SCORE == undefined) {
                  x.SCORE = 0;
                }
                ths.initAccurateCircle(x.SCORE, ths.getColor(x.SCORE));
              } else if ("唯一性" == x.NAME) {
                if (x.SCORE == undefined) {
                  x.SCORE = 0;
                }
                ths.initUniqueCircle(x.SCORE, ths.getColor(x.SCORE));
              } else if ("规范性" == x.NAME) {
                if (x.SCORE == undefined) {
                  x.SCORE = 0;
                }
                ths.initSpeciticationCircle(x.SCORE, ths.getColor(x.SCORE));
              }
            });

          } else {
            ths.$message({
              message: '获取电子病历数据质量第二行右边数据失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });
      },









      initConsistencyCircle(value,color){
        var array = new Array();
        array.push(color);
        // console.info(document.body.clientWidth);
        this.optionConsistencyCircle = {
          title: {
            text: value+'\n{colorChoose|一致性}',
            //subtext:'一致性',
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'bold',
              // color: '#3AB864',
              color: color,
              fontSize: '18',
              // height:50,
              rich:{
                colorChoose:{
                  color:"#000000",
                  // padding:[10,0,100,0]
                }
              }
            },
            subtextStyle:{
              fontWeight: 'bold',
              color: '#333333',
              fontSize: '12'
            }

          },
          // color: ['rgba(58, 184, 100, 1)'],
          color: array,
          legend: {
            show: true,
            itemGap: 12,
            data: ['01', '02']
          },

          series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['50%', '66%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [{
              value: 100-value,
              //name: '01',
              itemStyle: {
                normal: {
                  color: { // 完成的圆环的颜色
                    colorStops: [{
                      offset: 0,
                      color: '#EFF8FF' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#EFF8FF' // 100% 处的颜色
                    }]
                  },
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              }
            }, {
              //name: '02',
              value: value
            }]
          }]
        };

        this.consistencyCircle = this.$echarts.init(document.getElementById('consistency'));
        this.consistencyCircle.setOption(this.optionConsistencyCircle);


      },

      initIntegrityCircle(value,color){
        var array = new Array();
        array.push(color);
        var optionIntegrityCircle = {
          title: {
            text: value+'\n{colorChoose|完整性}',
            //subtext:'完整性',
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'bold',
              color: color,
              fontSize: '18',
              rich:{
                colorChoose:{
                  color:"#000000"
                }
              }
            },
            subtextStyle:{
              fontWeight: 'bold',
              color: '#333333',
              fontSize: '12',
            }

          },
          // color: ['rgba(255, 169, 4, 1)'],
          color: array,
          legend: {
            show: true,
            itemGap: 12,
            data: ['01', '02']
          },

          series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['50%', '66%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [{
              value: 100-value,
              //name: '01',
              itemStyle: {
                normal: {
                  color: { // 完成的圆环的颜色
                    colorStops: [{
                      offset: 0,
                      color: '#EFF8FF' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#EFF8FF' // 100% 处的颜色
                    }]
                  },
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              }
            }, {
              //name: '02',
              value: value
            }]
          }]
        };

        this.integrityCircle = this.$echarts.init(document.getElementById('integrity'));
        this.integrityCircle.setOption(optionIntegrityCircle);


      },
      initIntegrationCircle(value,color){
        var array = new Array();
        array.push(color);
        var optionIntegrationCircle = {
          title: {
            text: value+'\n{colorChoose|整合性}',
            //subtext:'整合性',
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'bold',
              color: color,
              fontSize: '18',
              rich:{
                colorChoose:{
                  color:"#000000"
                }
              }
            },
            subtextStyle:{
              fontWeight: 'bold',
              color: '#333333',
              fontSize: '12'
            }

          },
          // color: ['rgba(255, 62, 3, 1)'],
          color: array,
          legend: {
            show: true,
            itemGap: 12,
            data: ['01', '02']
          },

          series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['50%', '66%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [{
              value: 100-value,
              //name: '01',
              itemStyle: {
                normal: {
                  color: { // 完成的圆环的颜色
                    colorStops: [{
                      offset: 0,
                      color: '#EFF8FF' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#EFF8FF' // 100% 处的颜色
                    }]
                  },
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              }
            }, {
              //name: '02',
              value: value
            }]
          }]
        };

        this.integrationCircle = this.$echarts.init(document.getElementById('integration'));
        this.integrationCircle.setOption(optionIntegrationCircle);


      },
      initTimelinessCircle(value,color){
        var array = new Array();
        array.push(color);
        var optionTimelinessCircle = {
          title: {
            text: value+'\n{colorChoose|及时性}',
            //subtext:'及时性',
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'bold',
              color: color,
              fontSize: '18',
              rich:{
                colorChoose:{
                  color:"#000000"
                }
              }
            },
            subtextStyle:{
              fontWeight: 'bold',
              color: '#333333',
              fontSize: '12'
            }

          },
          // color: ['rgba(58, 184, 100, 1)'],
          color: array,
          legend: {
            show: true,
            itemGap: 12,
            data: ['01', '02']
          },

          series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['50%', '66%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [{
              value: 100-value,
              //name: '01',
              itemStyle: {
                normal: {
                  color: { // 完成的圆环的颜色
                    colorStops: [{
                      offset: 0,
                      color: '#EFF8FF' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#EFF8FF' // 100% 处的颜色
                    }]
                  },
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              }
            }, {
              //name: '02',
              value: value
            }]
          }]
        };

        this.timelinessCircle = this.$echarts.init(document.getElementById('timeliness'));
        this.timelinessCircle.setOption(optionTimelinessCircle);


      },

      initAccurateCircle(value,color){
        var array = new Array();
        array.push(color);
        var optionTimelinessCircle = {
          title: {
            text: value+'\n{colorChoose|准确性}',
            //subtext:'准确性',
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'bold',
              color: color,
              fontSize: '18',
              rich:{
                colorChoose:{
                  color:"#000000"
                }
              }
            },
            subtextStyle:{
              fontWeight: 'bold',
              color: '#333333',
              fontSize: '12'
            }

          },
          // color: ['rgba(58, 184, 100, 1)'],
          color: array,
          legend: {
            show: true,
            itemGap: 12,
            data: ['01', '02']
          },

          series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['50%', '66%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [{
              value: 100-value,
              //name: '01',
              itemStyle: {
                normal: {
                  color: { // 完成的圆环的颜色
                    colorStops: [{
                      offset: 0,
                      color: '#EFF8FF' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#EFF8FF' // 100% 处的颜色
                    }]
                  },
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              }
            }, {
              //name: '02',
              value: value
            }]
          }]
        };

        this.accurateCircle = this.$echarts.init(document.getElementById('accurate'));
        this.accurateCircle.setOption(optionTimelinessCircle);


      },

      initUniqueCircle(value,color){
        var array = new Array();
        array.push(color);
        var optionTimelinessCircle = {
          title: {
            text: value+'\n{colorChoose|唯一性}',
            //subtext:'唯一性',
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'bold',
              color: color,
              fontSize: '18',
              rich:{
                colorChoose:{
                  color:"#000000"
                }
              }
            },
            subtextStyle:{
              fontWeight: 'bold',
              color: '#333333',
              fontSize: '12'
            }

          },
          // color: ['rgba(58, 184, 100, 1)'],
          color: array,
          legend: {
            show: true,
            itemGap: 12,
            data: ['01', '02']
          },

          series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['50%', '66%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [{
              value: 100-value,
              //name: '01',
              itemStyle: {
                normal: {
                  color: { // 完成的圆环的颜色
                    colorStops: [{
                      offset: 0,
                      color: '#EFF8FF' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#EFF8FF' // 100% 处的颜色
                    }]
                  },
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              }
            }, {
              //name: '02',
              value: value
            }]
          }]
        };

        this.uniqueCircle = this.$echarts.init(document.getElementById('unique'));
        this.uniqueCircle.setOption(optionTimelinessCircle);


      },

      initSpeciticationCircle(value,color){
        var array = new Array();
        array.push(color);
        var optionTimelinessCircle = {
          title: {
            text: value+'\n{colorChoose|规范性}',
            //subtext:'规范性',
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'bold',
              color: color,
              fontSize: '18',
              rich:{
                colorChoose:{
                  color:"#000000"
                }
              }
            },
            subtextStyle:{
              fontWeight: 'bold',
              color: '#333333',
              fontSize: '12'
            }

          },
          // color: ['rgba(58, 184, 100, 1)'],
          color: array,
          legend: {
            show: true,
            itemGap: 12,
            data: ['01', '02']
          },

          series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['50%', '66%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [{
              value: 100-value,
              //name: '01',
              itemStyle: {
                normal: {
                  color: { // 完成的圆环的颜色
                    colorStops: [{
                      offset: 0,
                      color: '#EFF8FF' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#EFF8FF' // 100% 处的颜色
                    }]
                  },
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              }
            }, {
              //name: '02',
              value: value
            }]
          }]
        };

        this.speciticationCircle = this.$echarts.init(document.getElementById('specification'));
        this.speciticationCircle.setOption(optionTimelinessCircle);


      },

      initJiHeRule(){
        let ths = this;
        ths.$axios({
          method: 'post',
          url: '/hip-dqms/cdrQualityController/auditCount',
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            var baseAudit = res.data.data.baseAudit;
            var chooseAudit = res.data.data.chooseAudit;
            var optionJiHeRule = {
              legend: {
                itemHeight: 12,
                itemWidth: 12,
                itemGap:9,
                top:1
              },
              tooltip: {},
              dataset: {
                source: [
                  ['product', '整合性','及时性','准确性','唯一性','完整性',"一致性","规范性"],
                  // ['基本规则', 1,2,3,4,8,8,8],
                  // ['选择规则', 5,7,6,9,9,8,8]
                ]
              },
              color: [
                '#6F57FF',
                '#003FFF',
                'rgba(43,159,255,1)',
                'rgba(7,209,222,1)',
                'rgba(70,209,119,1)',
                'rgba(255,205,52,1)',
                'rgba(254,104,104,1)',
              ],
              grid: {
                top: '50',
                left: '6%',
                right: '6%',
                bottom: '3%',
                containLabel: true
              },
              barWidth: 20,
              xAxis: {type: 'category'},
              yAxis: {},
              series: [
                {type: 'bar', barGap:'0%',itemStyle: {normal: {barBorderRadius: 5}}},
                {type: 'bar', itemStyle: {normal: {barBorderRadius: 5}}},
                {type: 'bar', itemStyle: {normal: {barBorderRadius: 5}}},
                {type: 'bar', itemStyle: {normal: {barBorderRadius: 5}}},
                {type: 'bar', itemStyle: {normal: {barBorderRadius: 5}}},
                {type: 'bar', itemStyle: {normal: {barBorderRadius: 5}}},
                {type: 'bar', itemStyle: {normal: {barBorderRadius: 5}}}
              ]
            };

            optionJiHeRule.dataset.source.push(baseAudit);
            optionJiHeRule.dataset.source.push(chooseAudit);

            this.jiHeRule = this.$echarts.init(document.getElementById('jiHeRule'));
            this.jiHeRule.setOption(optionJiHeRule);
          } else {
            ths.$message({
              message: '获取临床数据中心数据质量第二行右边数据失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });
      },
      listDataQualityTrendTypes() {
        let ths = this;
        ths.$axios({
          method: 'post',
          url: '/hip-dqms/emrQualityController/listDataQualityTrendTypes',
          data: {
            modelId:'lcsjzx'
          }
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            var dataQualityTrendTypes = res.data.data.dataQualityTrendTypes;
            var dataQualityTrendTypesTrue = new Array();

            dataQualityTrendTypes.forEach((item,index)=>{
              dataQualityTrendTypesTrue.push({"ID":item.ID+"", "NAME": item.NAME});
              ths.checkedTypes.push(item.ID+"");
            });

            // $.each(dataQualityTrendTypes,function(i,j,k){
            //   dataQualityTrendTypesTrue.push({"ID",});
            // });
            ths.types = ths.types.concat(dataQualityTrendTypesTrue);
            // ths.checkedTypes = ['综合'];
            ths.initDataQualityTrend();
          } else {
            ths.$message({
              message: '获取电子病历数据质量第二行右边数据失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });
      },


      initDataQualityTrend(){
        let ths = this;
        var dataQualityTrendLevelIndeed = "";
        var dataQualityProjectIndeed = "";
        if (ths.dataQualityTrendLevel == 0) {
          dataQualityTrendLevelIndeed = "";
        } else {
          dataQualityTrendLevelIndeed = ths.dataQualityTrendLevel;
        }

        if (ths.dataQualityProject == 0) {
          dataQualityProjectIndeed = "";
        } else {
          dataQualityProjectIndeed = ths.dataQualityProject;
        }

        ths.$axios({
          method: 'post',
          url: '/hip-dqms/cdrQualityController/listDataQualityTrendData',
          data: {
            projectCode: dataQualityTrendLevelIndeed,
            formatType: ths.formatType,
            checkedTypes: ths.checkedTypes,
            dataQualityProject: dataQualityProjectIndeed,
            modelId:'lcsjzx'
          }
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            var score = res.data.data.score;
            var date = res.data.data.date;

            // console.info(score);
            // console.info(date);

            var optionDataQualityTrend = {
              tooltip: {
                trigger: 'axis'
              },
              grid: {
                top: '50',
                left: '2%',
                right: '3%',
                bottom: '3%',
                containLabel: true
              },
              color: [
                '#6F57FF',
                '#003FFF',
                'rgba(43,159,255,1)',
                'rgba(7,209,222,1)',
                'rgba(70,209,119,1)',
                'rgba(255,205,52,1)',
                'rgba(254,104,104,1)'
              ],
              xAxis: {
                type: 'category',
                boundaryGap: false,
                // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
              },
              yAxis: {
                min:0,
                max:100,
                type: 'value'
              },
              series: [
                // {
                //   name: '邮件营销',
                //   type: 'line',
                //   stack: '总量',
                //   data: [120, 132, 101, 134, 90, 230, 210]
                // },
              ]
            };
            optionDataQualityTrend.xAxis.data = date;
            optionDataQualityTrend.series.splice(0);
            for(let key in score) {
              for (var i = 0; i < ths.types.length; i++) {
                if (ths.types[i].ID == key) {
                  optionDataQualityTrend.series.push({
                    "name": ths.types[i].NAME, "type": "line",
                    "data": score[key]
                  });
                  break;
                }
              }
            }
            this.dataQualityTrend = this.$echarts.init(document.getElementById('dataQualityTrend'));
            this.dataQualityTrend.setOption(optionDataQualityTrend,true);
            this.optionDataQualityTrendHistory = optionDataQualityTrend;



            this.dataQualityTrend.on('dblclick', function (params) {
              if (params.name.indexOf("/") < 0) {
                return;
              }
              ths.chooseDisabled = true;
              var date2 = params.name;
              ths.trendTitle = date2.split("/")[0] + "年" + date2.split("/")[1]+"月";
              var dataQualityTrendLevelIndeed = "";
              var dataQualityProjectIndeed = "";
              if (ths.dataQualityTrendLevel == 0) {
                dataQualityTrendLevelIndeed = "";
              } else {
                dataQualityTrendLevelIndeed = ths.dataQualityTrendLevel;
              }

              if (ths.dataQualityProject == 0) {
                dataQualityProjectIndeed = "";
              } else {
                dataQualityProjectIndeed = ths.dataQualityProject;
              }
              ths.$axios({
                method: 'post',
                url: '/hip-dqms/emrQualityController/listDataQualityTrendData',
                data: {
                  projectCode: dataQualityTrendLevelIndeed,
                  formatType: ths.formatType,
                  checkedTypes: ths.checkedTypes,
                  dataQualityProject: dataQualityProjectIndeed,
                  date:date2,
                  formatType:"day",
                  modelId:'lcsjzx'
                }
              }).then(res => {
                if (res.status == 200 && res.data.code == 200) {
                  var score = res.data.data.score;
                  var date = res.data.data.date;
                  var optionDataQualityTrend = {
                    tooltip: {
                      trigger: 'axis'
                    },
                    grid: {
                      top: '50',
                      left: '2%',
                      right: '3%',
                      bottom: '3%',
                      containLabel: true
                    },
                    color: [
                      '#6F57FF',
                      '#003FFF',
                      'rgba(43,159,255,1)',
                      'rgba(7,209,222,1)',
                      'rgba(70,209,119,1)',
                      'rgba(255,205,52,1)',
                      'rgba(254,104,104,1)'
                    ],
                    xAxis: {
                      type: 'category',
                      boundaryGap: false,
                      // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: {
                      min:0,
                      max:100,
                      type: 'value'
                    },
                    series: [
                      // {
                      //   name: '邮件营销',
                      //   type: 'line',
                      //   stack: '总量',
                      //   data: [120, 132, 101, 134, 90, 230, 210]
                      // },
                    ]
                  };

                  var dayArray = new Array();
                  for (var l = 0; l < date.length; l++) {
                    dayArray.push(date[l].split("/")[2]);
                  }

                  //optionDataQualityTrend.xAxis.data = date;
                  optionDataQualityTrend.xAxis.data = dayArray;
                  optionDataQualityTrend.series.splice(0);
                  for(let key in score) {
                    for (var i = 0; i < ths.types.length; i++) {
                      if (ths.types[i].ID == key) {
                        optionDataQualityTrend.series.push({
                          "name": ths.types[i].NAME, "type": "line",
                          "data": score[key]
                        });
                        break;
                      }
                    }
                  }
                  ths.dataQualityTrend.setOption(optionDataQualityTrend,true);


                } else {
                  ths.$message({
                    message: '获取电子病历数据质量第二行右边数据失败！' + res.data.errorMessage,
                    duration: '1000',
                    type: 'error',
                  });
                }
              });
            });




          } else {
            ths.$message({
              message: '获取电子病历数据质量第二行右边数据失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });

      },
      changeType(value){
        this.initDataQualityTrend();
      },
      changeLevelFunction(value) {
        this.initDataQualityTrend();
      },
      changeChooseFunction(value) {
        this.initDataQualityTrend();
      },
      returnData(){
        this.chooseDisabled = false;
        this.dataQualityTrend.setOption(this.optionDataQualityTrendHistory,true);
      }





    },
    mounted() {
      let _this = this;
      window.onresize = function() {
          if (_this.consistencyCircle != null && _this.consistencyCircle != undefined && _this.consistencyCircle != "") {
              _this.consistencyCircle.resize();
          }
          if (_this.integrityCircle != null && _this.integrityCircle != undefined && _this.integrityCircle != "") {
              _this.integrityCircle.resize();
          }
          if (_this.integrationCircle != null && _this.integrationCircle != undefined && _this.integrationCircle != "") {
              _this.integrationCircle.resize();
          }
          if (_this.timelinessCircle != null && _this.timelinessCircle != undefined && _this.timelinessCircle != "") {
              _this.timelinessCircle.resize();
          }
          if (_this.jiHeRule != null && _this.jiHeRule != undefined && _this.jiHeRule != "") {
              _this.jiHeRule.resize();
          }
          if (_this.dataQualityTrend != null && _this.dataQualityTrend != undefined && _this.dataQualityTrend != "") {
              _this.dataQualityTrend.resize();
          }
          if (_this.accurateCircle != null && _this.accurateCircle != undefined && _this.accurateCircle != "") {
              _this.accurateCircle.resize();
          }
          if (_this.uniqueCircle != null && _this.uniqueCircle != undefined && _this.uniqueCircle != "") {
              _this.uniqueCircle.resize();
          }
          if (_this.speciticationCircle != null && _this.speciticationCircle != undefined && _this.speciticationCircle != "") {
              _this.speciticationCircle.resize();
          }
      }
    },
    created() {
      this.getFirstLeft();
      this.getSecondRight();
      this.listDataQualityTrendTypes();


      // this.initConsistencyCircle();
      //
      // this.initIntegrityCircle();
      //
      // this.initIntegrationCircle();
      //
      // this.initTimelinessCircle();

      this.initJiHeRule();

      //this.initDataQualityTrend();
    },
    // watch: {
    //   timeRange: function (value) {
    //     if ("custom" == value) {
    //
    //     }
    //   }
    // }
  }
</script>

<style>
  .el-select .el-input__inner{
    width: 100px;
  }
</style>

<style scoped>
  .fullScreen {
    width: 100%;
    height: 100%;
  }

  .qualityTitle{
    #height: 35px;
    height: 2.5vw;
    line-height: 2.5vw;
    background: #E6F3FC;
  }

  .el-checkbox{
    margin-right: 5px;
  }

  .border {
    width: 100%;
    float: left;
    height: 2%;
    background: rgba(242, 242, 242, 1);
    #margin-top: 1%;
  }

</style>
