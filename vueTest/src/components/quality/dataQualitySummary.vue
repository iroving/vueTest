<template>
  <div class="fullScreen">
    <header class="header">
      <div class="ruleStyle runTime">
        <div class="ruleLeft"></div>
        <div class="iconfont fontIcon">&#xe6fa;</div>
        <div class="ruleRight">
          <div style="font-size: 2.5vw;">{{runTime}}</div>
          <div style="font-size: 1.2vw;">运行天数</div>
        </div>
      </div>

      <div class="ruleStyle ruleTotal">
        <div class="ruleLeft"></div>
        <div class="iconfont fontIcon">&#xe6f9;</div>
        <div class="ruleRight">
          <div style="font-size: 2.5vw;">{{ruleCount}}</div>
          <div style="font-size: 1.2vw;">规则总数</div>
        </div>
      </div>

      <div class="ruleStyle usedRule">
        <div class="ruleLeft"></div>
        <div class="iconfont fontIcon">&#xe6f4;</div>
        <div class="ruleRight">
          <div style="font-size: 2.5vw;">{{enabledRuleCount}}</div>
          <div style="font-size: 1.2vw;">启用规则数</div>
        </div>
      </div>

      <div class="ruleStyle involveData">
        <div class="ruleLeft"></div>
        <div class="iconfont fontIcon">&#xe6f7;</div>
        <div class="ruleRight">
          <div style="font-size: 2.5vw;">{{relatedDataModule}}</div>
          <div style="font-size: 1.2vw;">涉及数据模块</div>
        </div>
      </div>

      <div class="ruleStyle involveBusiness">
        <div class="ruleLeft"></div>
        <div class="iconfont fontIcon">&#xe6f8;</div>
        <div class="ruleRight">
          <div style="font-size: 2.5vw;">{{relatedBusinessModule}}</div>
          <div style="font-size: 1.2vw;">涉及业务系统</div>
        </div>
      </div>

    </header>
    <section class="border"></section>
    <footer>
      <div class="foot">
        <section class="qualitySegmentLeft" :style="qualitySegmentLeftStyle" v-show="emrShow==true">
          <div class="qualityTitle">
            <div class="iconfont" :style="'display:inline-block;margin:0 10px 0 20px;float:left;font-size: 1.5vw;color:rgb(7, 139, 222)'">&#xe6e6;
            </div>
            <span style="font-size: 1vw;">电子病历数据质量</span>
          </div>
          <div style="height:28%;border-bottom: 1px solid rgba(228,228,228,1);position: relative">
<!--            <div class="iconfont" :style="'position: absolute;top:15%;left:10%;font-size: 4.8vw;color:'+emrEntireScorePrize">&#xe6ed;-->
<!--            </div>-->
            <img style="position: absolute;top:15%;left:10%;height:60%;" :src="require('../../assets/images/'+emrEntireScorePrize)"/>

            <div :style="'font-weight:bold;text-align:center;width: 6vw;position: absolute;top:20%;left:34%;font-size: 2.7vw;color:'+emrEntireScoreColor">{{emrEntireScore}}</div>
            <div style="width: 6vw;text-align:center;color:#666666;position: absolute;top:51%;left:34%;font-size: 1.0vw;">总体评分</div>
            <div
              style="position: absolute;top:30%;left:57%;border-right:1px solid rgba(228,228,228,1);height:30%;"></div>
            <div style="position: absolute;top:28%;left:62%;font-size: 1.0vw;">基础项目：{{emrBaseItemScore}}</div>
            <div style="position: absolute;top:48%;left:62%;font-size: 1.0vw;">选择项目：{{emrChoosedItemScore}}</div>
          </div>
          <div style="height:calc(72% - 2.5vw);position: relative">
            <div id="electronic" style="position: absolute;top:0px;bottom: 30%;left:0px;right: 0px;"></div>
            <div id="electronicDesc" style="position: absolute;top:70%;bottom: 20%;left:0px;right: 0px;">
              <div style="text-align:center;width:100%;margin: 0 auto;overflow: hidden;font-size: 0.8vw;">规则总数：<span style="font-size: 0.9vw;font-weight: bold;">{{emrRuleCount}}</span>
                丨启用规则总数：<span style="font-size: 0.9vw;font-weight: bold;">{{emrEnabledRuleCount}}</span> 丨校验等级：<span style="font-size: 0.9vw;font-weight: bold;">{{emrCheckLevel}}</span>级
              </div>
            </div>
            <div
              style="position: absolute;top:80%;bottom: 0%;background:rgba(242,242,242,1); right: 0;left:0;padding:10px;font-size: 0.8vw;">
              根据2018年发布的《电子病历系统应用水平分级评价标准》，分4个数据质量类型做数据质量稽核
            </div>
          </div>

        </section>
        <section class="qualitySegmentMiddle" :style="qualitySegmentMiddleStyle" v-show="cdrShow==true">
          <div class="qualityTitle">
            <div class="iconfont" style="display:inline-block;margin:0 10px 0 20px;float:left;color:#078BDE;font-size: 1.5vw;">&#xe6e5;
            </div>
            <span style="font-size: 1vw;">临床数据中心数据质量</span>
          </div>
          <div style="height:28%;border-bottom: 1px solid rgba(228,228,228,1);position: relative">
<!--            <div class="iconfont"-->
<!--                 :style="'position: absolute;top:15%;left:10%;font-size: 4.8vw;color:'+cdrEntireScorePrize">&#xe6ed;-->
<!--            </div>-->
            <img style="position: absolute;top:15%;left:10%;height:60%;" :src="require('../../assets/images/'+cdrEntireScorePrize)"/>
            <div :style="'font-weight:bold;text-align:center;width: 6vw;position: absolute;top:20%;left:34%;font-size: 2.7vw;color:'+cdrEntireScoreColor">{{cdrEntireScore}}</div>
            <div style="width: 6vw;text-align:center;color:#666666;position: absolute;top:51%;left:34%;font-size: 1.0vw;">总体评分</div>
            <div
              style="position: absolute;top:30%;left:57%;border-right:1px solid rgba(228,228,228,1);height:30%;"></div>
            <div style="position: absolute;top:28%;left:62%;font-size: 1.0vw;">基础项目：{{cdrBaseItemScore}}</div>
            <div style="position: absolute;top:48%;left:62%;font-size: 1.0vw;">选择项目：{{cdrChoosedItemScore}}</div>
          </div>
          <div style="height:calc(72% - 2.5vw);position: relative">
            <div id="dataCenter" style="position: absolute;top:0px;bottom: 30%;left:0px;right: 0px;"></div>
            <div id="dataCenterDesc" style="position: absolute;top:70%;bottom: 20%;left:0px;right: 0px;">
              <div style="width:100%;margin: 0 auto;overflow: hidden;font-size: 0.8vw;text-align:center;">规则总数：<span style="font-size: 0.9vw;font-weight: bold;">{{cdrRuleCount}}</span>
                丨启用规则总数：<span style="font-size: 0.9vw;font-weight: bold;">{{cdrEnabledRuleCount}}</span>
              </div>
            </div>
            <div
              style="position: absolute;top:80%;bottom: 0%;background:rgba(242,242,242,1); right: 0;left:0;padding:10px;font-size: 0.8vw;">
              根据数据集分类，分7大数据质量类型，做临床数据中心数据质量稽核
            </div>
          </div>
        </section>
        <section class="qualitySegmentRight" :style="qualitySegmentRightStyle" v-show="clpShow==true">
          <div class="qualityTitle">
            <div class="iconfont" style="display:inline-block;margin:0 10px 0 20px;float:left;color:#078BDE;font-size: 1.5vw;">&#xe6e8;
            </div>
            <span style="font-size: 1vw;">业务闭环数据质量</span>
          </div>
          <div style="height:28%;border-bottom: 1px solid rgba(228,228,228,1);position: relative">
<!--            <div class="iconfont"-->
<!--                 :style="'position: absolute;top:15%;left:10%;font-size: 4.8vw;color:'+closedCircleEntireScorePrize">&#xe6ed;-->
<!--            </div>-->
            <img style="position: absolute;top:15%;left:10%;height:60%;" :src="require('../../assets/images/'+closedCircleEntireScorePrize)"/>
            <div :style="'font-weight:bold;text-align:center;width: 6vw;position: absolute;top:20%;left:34%;font-size: 2.7vw;color:'+closedCircleEntireScoreColor">{{closedCircleEntireScore}}</div>
            <div style="width: 6vw;text-align:center;color:#666666;position: absolute;top:51%;left:34%;font-size: 1.0vw;">总体评分</div>
            <div
              style="position: absolute;top:30%;left:57%;border-right:1px solid rgba(228,228,228,1);height:30%;"></div>
            <div style="position: absolute;top:28%;left:62%;font-size: 1.0vw;">完整性得分：{{closedCircleCompleteScore}}</div>
            <div style="position: absolute;top:48%;left:62%;font-size: 1.0vw;">及时性得分：{{closedCircleTimeliesScore}}</div>
          </div>
          <div style="height:calc(72% - 2.5vw);position: relative">
            <div id="clb" style="position: absolute;top:0px;bottom: 30%;left:0px;right: 0px;"></div>
            <div id="clbDesc" style="position: absolute;top:70%;bottom: 20%;left:0px;right: 0px;">
              <div style="width:100%;margin: 0 auto;overflow: hidden;font-size: 0.8vw;text-align:center;">
                规则总数：<span style="font-size: 0.9vw;font-weight: bold;">{{businessClosedLoopRuleCount}}</span> 丨启用规则总数：<span style="font-size: 0.9vw;font-weight: bold;">{{businessClosedLoopEnabledRuleCount}}</span>
              </div>
            </div>
            <div
              style="position: absolute;top:80%;bottom: 0%;background:rgba(242,242,242,1); right: 0;left:0;padding:10px;font-size: 0.8vw;">
              根据业务闭环种类，以2大数据质量类型，做业务闭环数据质量稽核展示
            </div>
          </div>
        </section>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "dataQualitySummary",
    data() {
      return {
        scoreColorRed:'rgb(252, 78, 78)',
        scoreColorYellow:'rgb(255, 169, 4)',
        scoreColorGreen:'rgb(58, 184, 100)',
        // prizeGold:'rgb(255, 214, 26)',
        // prizeSilver:'rgb(230, 230, 230)',
        // prizeCopper:'rgb(217, 171, 123)',
        prizeGold:'gold.png',
        prizeSilver:'silver.png',
        prizeCopper:'copper.png',


        runTime: '',
        ruleCount: '',
        enabledRuleCount: '',
        relatedDataModule: '',
        relatedBusinessModule: '',

        emrRuleCount: '',
        emrEnabledRuleCount: '',
        emrCheckLevel: '',
        emrBaseItemScore: '',
        emrChoosedItemScore: '',
        emrEntireScore: '',
        emrEntireScoreColor:'',
        emrEntireScorePrize:'copper.png',



        cdrRuleCount: '',
        cdrEnabledRuleCount: '',
        cdrBaseItemScore:'',
        cdrChoosedItemScore:'',
        cdrEntireScore:'',
        cdrEntireScoreColor:'',
        cdrEntireScorePrize:'copper.png',

        closedCircleEntireScore:0,
        closedCircleEntireScoreColor:'',
        closedCircleEntireScorePrize:'copper.png',
        closedCircleCompleteScore:0,
        closedCircleTimeliesScore:0,


        businessClosedLoopRuleCount: 0,
        businessClosedLoopEnabledRuleCount: 0,




        emrShow: false,
        cdrShow: false,
        clpShow: false,

        qualitySegmentLeftStyle: '',
        qualitySegmentMiddleStyle: '',
        qualitySegmentRightStyle: '',

        leftChart: '',
        middleChart: '',
        rightChart: '',
      }
    },
    methods: {
      getRuntime() {
        let ths = this;
        ths.$axios({
          method: 'get',
          url: '/hip-dqms/dataQualitySummaryController/getRuntime',
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            this.runTime = res.data.data.runTime;
          } else {
            ths.$message({
              message: '获取运行天数失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });

      },
      getRuleCount() {
        let ths = this;
        ths.$axios({
          method: 'get',
          url: '/hip-dqms/dataQualitySummaryController/getRuleCount',
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            this.ruleCount = res.data.data.ruleCount;
          } else {
            ths.$message({
              message: '获取规则总数失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });

      },
      getEnabledRuleCount() {
        let ths = this;
        ths.$axios({
          method: 'get',
          url: '/hip-dqms/dataQualitySummaryController/getEnabledRuleCount',
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            this.enabledRuleCount = res.data.data.enabledRuleCount;
          } else {
            ths.$message({
              message: '获取启用规则数失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });

      },
      getRelatedDataModule() {
        let ths = this;
        ths.$axios({
          method: 'get',
          url: '/hip-dqms/dataQualitySummaryController/getRelatedDataModule',
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            this.relatedDataModule = res.data.data.relatedDataModule;
          } else {
            ths.$message({
              message: '获取涉及数据模块失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });

      },
      getRelatedBusinessModule() {
        let ths = this;
        ths.$axios({
          method: 'get',
          url: '/hip-dqms/dataQualitySummaryController/getRelatedBusinessModule',
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            this.relatedBusinessModule = res.data.data.relatedBusinessModule;
          } else {
            ths.$message({
              message: '获取涉及业务模块失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });

      },
      getEmrRuleCount() {
        let ths = this;
        ths.$axios({
          method: 'get',
          url: '/hip-dqms/dataQualitySummaryController/getEmrRuleCount',
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            this.emrRuleCount = res.data.data.emrRuleCount;
          } else {
            ths.$message({
              message: '获取电子病历规则总数失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });
      },
      getEmrEnabledRuleCount() {
        let ths = this;
        ths.$axios({
          method: 'get',
          url: '/hip-dqms/dataQualitySummaryController/getEmrEnabledRuleCount',
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            this.emrEnabledRuleCount = res.data.data.emrEnabledRuleCount;
          } else {
            ths.$message({
              message: '获取电子病历启用规则总数失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });
      },
      getEmrCheckLevel() {
        let ths = this;
        ths.$axios({
          method: 'get',
          url: '/hip-dqms/dataQualitySummaryController/getEmrCheckLevel',
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            this.emrCheckLevel = res.data.data.emrCheckLevel;
          } else {
            ths.$message({
              message: '获取电子病历校验等级失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });
      },
      getEmrChoosedRuleCountAndBaseRuleCount() {
        let ths = this;
        ths.$axios({
          method: 'get',
          url: '/hip-dqms/dataQualitySummaryController/getEmrChoosedRuleCountAndBaseRuleCount',
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            //this.emrBaseRuleCount = res.data.data.emrBaseRuleCount;
            var emrChoosedRuleCount = res.data.data.emrChoosedRuleCountAndBaseRuleCount.choosedRuleCount;
            var emrBaseRuleCount = res.data.data.emrChoosedRuleCountAndBaseRuleCount.baseRuleCount;

            var dataArray = [{value: emrBaseRuleCount, name: '基础规则'}, {value: emrChoosedRuleCount, name: '选择规则'}];
            var option = {
              tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
              },
              legend: {
                itemHeight: 12,
                itemWidth: 12,
                orient: 'vertical',
                left: 10,
                data: ['基础规则', '选择规则']
              },
              series: [
                {
                  name: '',
                  type: 'pie',
                  radius: ['50%', '70%'],
                  avoidLabelOverlap: false,
                  label: {
                    formatter:'{c}'
                    // emphasis: {
                    //   show: true,
                    //   textStyle: {
                    //     fontSize: '30',
                    //     fontWeight: 'bold'
                    //   }
                    // }
                  },
                  labelLine: {
                    normal: {
                      show: true
                    }
                  },
                  data: dataArray,
                  itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal: {
                      color: function (params) {
                        //自定义颜色
                        var colorList = [
                          '#239EFF','#FF6D6D',  '#FFFF00', '#FF8C00', '#FF0000', '#FE8463',
                        ];
                        return colorList[params.dataIndex]
                      }
                    }
                  }
                }
              ]
            };


            this.leftChart = this.$echarts.init(document.getElementById('electronic'));
            this.leftChart.setOption(option);


          } else {
            ths.$message({
              message: '获取电子病历基础规则总数和选择规则总数失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });
      },
      getEmrBaseItemScore() {
        let ths = this;
        ths.$axios({
          method: 'get',
          url: '/hip-dqms/dataQualitySummaryController/getEmrBaseItemScore',
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            this.emrBaseItemScore = res.data.data.emrBaseItemScore;
          } else {
            ths.$message({
              message: '获取电子病历基础项目评分失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });
      },
      getEmrChoosedItemScore() {
        let ths = this;
        ths.$axios({
          method: 'get',
          url: '/hip-dqms/dataQualitySummaryController/getEmrChoosedItemScore',
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            this.emrChoosedItemScore = res.data.data.emrChoosedItemScore;
          } else {
            ths.$message({
              message: '获取电子病历选择项目评分失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });
      },
      getEmrEntireScore() {
        let ths = this;
        ths.$axios({
          method: 'get',
          url: '/hip-dqms/dataQualitySummaryController/getEmrEntireScore',
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            this.emrEntireScore = res.data.data.emrEntireScore;
            if (this.emrEntireScore >= 90) {
              this.emrEntireScoreColor = this.scoreColorGreen;
              this.emrEntireScorePrize = this.prizeGold;
            }else if (this.emrEntireScore <= 50) {
              this.emrEntireScoreColor = this.scoreColorRed;
              this.emrEntireScorePrize = this.prizeCopper;
            }else {
              this.emrEntireScoreColor = this.scoreColorYellow;
              this.emrEntireScorePrize = this.prizeSilver;
            }
          } else {
            ths.$message({
              message: '获取电子病历总体评分失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });
      },
      getCdrRuleCount() {
        let ths = this;
        ths.$axios({
          method: 'get',
          url: '/hip-dqms/dataQualitySummaryController/getCdrRuleCount',
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            this.cdrRuleCount = res.data.data.cdrRuleCount;
          } else {
            ths.$message({
              message: '获取临床数据中心规则总数失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });
      },
      getCdrEnabledRuleCount() {
        let ths = this;
        ths.$axios({
          method: 'get',
          url: '/hip-dqms/dataQualitySummaryController/getCdrEnabledRuleCount',
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            this.cdrEnabledRuleCount = res.data.data.cdrEnabledRuleCount;
          } else {
            ths.$message({
              message: '获取临床数据中心启用规则总数失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });
      },
      getCdrBaseRuleCountAndChoosedRuleCount() {
        let ths = this;
        ths.$axios({
          method: 'get',
          url: '/hip-dqms/dataQualitySummaryController/getCdrBaseRuleCountAndChoosedRuleCount',
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            //this.cdrBaseRuleCount = res.data.data.cdrBaseRuleCount;
            var emrChoosedRuleCount = res.data.data.cdrBaseRuleCountAndChoosedRuleCount.choosedRuleCount;
            var emrBaseRuleCount = res.data.data.cdrBaseRuleCountAndChoosedRuleCount.baseRuleCount;

            var dataArray = [{value: emrBaseRuleCount, name: '基础规则'}, {value: emrChoosedRuleCount, name: '选择规则'}];
            var option = {
              tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
              },
              legend: {
                itemHeight: 12,
                itemWidth: 12,
                orient: 'vertical',
                left: 10,
                data: ['基础规则', '选择规则']
              },
              series: [
                {
                  name: '',
                  type: 'pie',
                  radius: ['50%', '70%'],
                  avoidLabelOverlap: false,
                  label: {
                    formatter:'{c}'

                    // emphasis: {
                    //   show: true,
                    //   textStyle: {
                    //     fontSize: '30',
                    //     fontWeight: 'bold'
                    //   }
                    // }
                  },
                  labelLine: {
                    normal: {
                      show: true
                    }
                  },
                  data: dataArray,
                  itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal: {
                      color: function (params) {
                        //自定义颜色
                        var colorList = [
                          '#239EFF','#FF6D6D', '#FFFF00', '#FF8C00', '#FF0000', '#FE8463',
                        ];
                        return colorList[params.dataIndex]
                      }
                    }
                  }
                }
              ]
            };

            this.middleChart = this.$echarts.init(document.getElementById('dataCenter'));
            this.middleChart.setOption(option);


          } else {
            ths.$message({
              message: '获取临床数据中心基础规则总数和选择规则总数失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });
      },
      // getEmrScore() {
      //   let ths = this;
      //   ths.$axios({
      //     method: 'get',
      //     url: '/hip-dqms/dataQualitySummaryController/getEmrScore',
      //   }).then(res => {
      //     if (res.status == 200 && res.data.code == 200) {
      //       //this.businessClosedLoopEnabledRuleCount = res.data.data.businessClosedLoopEnabledRuleCount;
      //       this.emrBaseItemScore = res.data.data.emrBaseItemScore;
      //       this.emrChoosedItemScore = res.data.data.emrChoosedItemScore;
      //       this.emrEntireScore = res.data.data.emrEntireScore;
      //     } else {
      //       ths.$message({
      //         message: '获取电子病历分数失败！' + res.data.errorMessage,
      //         duration: '1000',
      //         type: 'error',
      //       });
      //     }
      //   });
      // },
      getCdrScore() {
        let ths = this;
        ths.$axios({
          method: 'get',
          url: '/hip-dqms/dataQualitySummaryController/getCdrScore',
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            //this.businessClosedLoopEnabledRuleCount = res.data.data.businessClosedLoopEnabledRuleCount;
            this.cdrBaseItemScore = res.data.data.cdrBaseItemScore;
            this.cdrChoosedItemScore = res.data.data.cdrChoosedItemScore;
            this.cdrEntireScore = res.data.data.cdrEntireScore;

            if (this.cdrEntireScore >= 90) {
              this.cdrEntireScoreColor = this.scoreColorGreen;
              this.cdrEntireScorePrize = this.prizeGold;
            }else if (this.cdrEntireScore <= 50) {
              this.cdrEntireScoreColor = this.scoreColorRed;
              this.cdrEntireScorePrize = this.prizeCopper;
            }else {
              this.cdrEntireScoreColor = this.scoreColorYellow;
              this.cdrEntireScorePrize = this.prizeSilver;
            }

          } else {
            ths.$message({
              message: '获取临床数据中心分数失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });
      },
      getClosedCircleDataQuality() {
        let ths = this;
        ths.$axios({
          method: 'get',
          url: '/hip-dqms/dataQualitySummaryController/getClosedCircleDataQuality',
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            ths.closedCircleEntireScore = res.data.data.closedCircleEntireScore;
            ths.closedCircleCompleteScore = res.data.data.closedCircleCompleteScore;
            ths.closedCircleTimeliesScore = res.data.data.closedCircleTimelinessScore;

            ths.businessClosedLoopRuleCount = res.data.data.closedCircleRuleCount;
            ths.businessClosedLoopEnabledRuleCount = res.data.data.closedCircleEnabledRuleCount;

            var closedCircleCircle = res.data.data.closedCircleCircle;

            var dataArray = [{value: closedCircleCircle[0], name: '及时性规则'}, {value: closedCircleCircle[1], name: '完整性规则'}];
            var option = {
              tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
              },
              legend: {
                itemHeight: 12,
                itemWidth: 12,
                orient: 'vertical',
                left: 10,
                data: ['及时性规则', '完整性规则']
              },
              series: [
                {
                  name: '',
                  type: 'pie',
                  radius: ['50%', '70%'],
                  avoidLabelOverlap: false,
                  label: {
                    formatter:'{c}'
                    // emphasis: {
                    //   show: true,
                    //   textStyle: {
                    //     fontSize: '30',
                    //     fontWeight: 'bold'
                    //   }
                    // }
                  },
                  labelLine: {
                    normal: {
                      show: true
                    }
                  },
                  data: dataArray,
                  itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal: {
                      color: function (params) {
                        //自定义颜色
                        var colorList = [
                          '#239EFF','#FF6D6D',  '#FFFF00', '#FF8C00', '#FF0000', '#FE8463',
                        ];
                        return colorList[params.dataIndex]
                      }
                    }
                  }
                }
              ]
            };

            this.rightChart = this.$echarts.init(document.getElementById('clb'));
            this.rightChart.setOption(option);

            if (this.closedCircleEntireScore >= 90) {
              this.closedCircleEntireScoreColor = this.scoreColorGreen;
              this.closedCircleEntireScorePrize = this.prizeGold;
            }else if (this.closedCircleEntireScore <= 50) {
              this.closedCircleEntireScoreColor = this.scoreColorRed;
              this.closedCircleEntireScorePrize = this.prizeCopper;
            }else {
              this.closedCircleEntireScoreColor = this.scoreColorYellow;
              this.closedCircleEntireScorePrize = this.prizeSilver;
            }

          } else {
            ths.$message({
              message: '获取闭环数据质量失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });
      },
      getModuleInfo: function () {
        let ths = this;
        ths.$axios({
          method: 'get',
          url: '/hip-dqms/dataQualitySummaryController/getModuleInfo',
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            // * 页面展示用，展示几个模块，
            // *    ID   NAME            CODE
            // * 1	9	  电子病历	     dzbl		0	0	0		16
            // * 2	10	临床数据中心	 lcsjzx		0	0	0		17
            // * 3	12	业务闭环	     ywbh		0	0	1		17


            var moduleInfoList = res.data.data.moduleInfo;
            // moduleInfoList = moduleInfoList.slice(0, 1);
            if (moduleInfoList != null && moduleInfoList.length > 0) {
              moduleInfoList.forEach((value, index) => {
                if (value.CODE == 'dzbl') {
                  this.emrShow = true;
                  this.getEmrRuleCount();
                  this.getEmrEnabledRuleCount();
                  this.getEmrCheckLevel();
                  this.getEmrChoosedRuleCountAndBaseRuleCount();
                  this.getEmrBaseItemScore();
                  this.getEmrChoosedItemScore();
                  this.getEmrEntireScore();
                }
                if (value.CODE == 'lcsjzx') {
                  this.cdrShow = true;
                  this.getCdrRuleCount();
                  this.getCdrEnabledRuleCount();
                  this.getCdrBaseRuleCountAndChoosedRuleCount();
                  this.getCdrScore();
                }
                if (value.CODE == 'ywbh') {
                  this.clpShow = true;
                  this.getClosedCircleDataQuality();
                }
              });
            }


            if (moduleInfoList != null && moduleInfoList.length < 3) {
              if (this.emrShow && this.cdrShow) {
                this.qualitySegmentLeftStyle = {'width': '49%'};
                this.qualitySegmentMiddleStyle = {'width': '49%', 'left': '51%'};
                //this.qualitySegmentRightStyle = {'width':'49%'};
              } else if (this.emrShow && this.clpShow) {
                this.qualitySegmentLeftStyle = {'width': '49%'};
                //this.qualitySegmentMiddleStyle = {'width':'49%'};
                this.qualitySegmentRightStyle = {'width': '49%', 'right': '0%'};
              } else if (this.cdrShow && this.clpShow) {
                // this.qualitySegmentLeftStyle = {'width':'49%'};
                this.qualitySegmentMiddleStyle = {'width': '49%', 'left': '0%'};
                this.qualitySegmentRightStyle = {'width': '49%'};
              } else {
                this.qualitySegmentLeftStyle = {'width': '49%', 'left': '25%'};
                this.qualitySegmentMiddleStyle = {'width': '49%', 'left': '25%'};
                this.qualitySegmentRightStyle = {'width': '49%', 'left': '25%'};
              }
            }

            window.onresize = function () {
              if (ths.emrShow) {
                if (ths.leftChart != "" && ths.leftChart != null && ths.leftChart != undefined) {
                  ths.leftChart.resize();
                }
              }

              if (ths.cdrShow) {
                if (ths.middleChart != "" && ths.middleChart != null && ths.middleChart != undefined) {
                  ths.middleChart.resize();
                }
              }

              if (ths.clpShow) {
                if (ths.rightChart != "" && ths.rightChart != null && ths.rightChart != undefined) {
                  ths.rightChart.resize();
                }
              }
            }


          } else {
            ths.$message({
              message: '获取模块信息失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });
      }
    },
    mounted() {
      this.getRuntime();
      this.getRuleCount();
      this.getEnabledRuleCount();
      this.getRelatedDataModule();
      this.getRelatedBusinessModule();
      this.getModuleInfo();


      // this.getEmrRuleCount();
      // this.getEmrEnabledRuleCount();
      // this.getEmrCheckLevel();
      // this.getEmrChoosedRuleCountAndBaseRuleCount();
      // this.getEmrBaseItemScore();
      // this.getEmrChoosedItemScore();
      // this.getEmrEntireScore();
      // this.getCdrRuleCount();
      // this.getCdrEnabledRuleCount();
      // this.getCdrBaseRuleCountAndChoosedRuleCount();
      // this.getBusinessClosedLoopRuleCount();
      // this.getBusinessClosedLoopEnabledRuleCount();


      // this.rightChart = this.$echarts.init(document.getElementById('clb'));
      // this.rightChart.setOption(this.option);



    },
    created() {


    }
  }

</script>

<style scoped>
  .ruleStyle {
    width: 18%;
    height: 100%;
    border-radius: 10px;
    float: left;
    margin: 0 1%;
  }


  .runTime {
    background: linear-gradient(to right, #2DC1FF, #2B95FF);
  }

  .ruleTotal {
    background: linear-gradient(to right, #29E6AE, #00D4C2);
  }

  .usedRule {
    background: linear-gradient(to right, #FFB24E, #FE824C);
  }

  .involveData {
    background: linear-gradient(to right, #FC6060, #FF6D6D);
  }

  .involveBusiness {
    background: linear-gradient(to right, #9C7FF1, #6A67FB);
  }

  .fullScreen {
    width: 100%;
    height: 100%;
  }

  .header {
    height: 20%;
    width: 100%;
    margin-top: 1%;
    float: left;
  }

  .fontIcon {
    font-size: 4vw;
    color: white;
    /*display: table-cell;*/
    vertical-align: middle;
    /*width:10%;*/
    transform: translateY(-50%);
    position: relative;
    top: 50%;
    float: left;
  }

  .ruleRight {
    transform: translateY(-50%);
    position: relative;
    top: 50%;
    margin-left: 16%;
    float: left;
    font-size: 1.4vw;
    #font-weight: bold;
    color: white;
  }

  .ruleLeft {
    width: 15%;
    height: 100%;
    float: left;
  }

  .ruleCentre {
    display: table-cell;
    float: left;
    vertical-align: middle;
  }

  .border {
    width: 100%;
    float: left;
    height: 1.5%;
    background: rgba(242, 242, 242, 1);
    margin-top: 1%;
  }

  footer {
    width: 100%;
    height: calc(73.5% - 15px);
    float: left;

  }

  .foot {
    width: 98%;
    margin: 0 auto;
    height: 100%;
    position: relative;
  }

  .qualitySegmentLeft {
    top: 3%;
    left: 0;
    width: 32%;
    border: 1px solid #E4E4E4;
    position: absolute;
    #height: calc(100% - 30px);
    height: 97%;
  }

  .qualitySegmentMiddle {
    top: 3%;
    left: 34%;
    width: 32%;
    border: 1px solid #E4E4E4;
    position: absolute;
    #height: calc(100% - 30px);
    height: 97%;
  }

  .qualitySegmentRight {
    top: 3%;
    right: 0%;
    width: 32%;
    border: 1px solid #E4E4E4;
    position: absolute;
    #height: calc(100% - 30px);
    height: 97%;
  }

  .qualityTitle {
    #height: 32px;
    height: 2.5vw;
    line-height: 2.5vw;
    background: #E6F3FC;

  }



</style>
