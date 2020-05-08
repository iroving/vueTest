<template>
  <div class="fullScreen">
    <header style="height: 48px;background:rgba(248,248,248,1);">
      <div style="transform: translateY(-50%);position: relative;top: 50%;margin-left: 2%;height:40px;line-height: 40px">
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

<!--          <el-date-picker>-->
<!--            v-model="dateRange"-->
<!--            type="daterange"-->
<!--            range-separator="至"-->
<!--            start-placeholder="开始日期"-->
<!--            end-placeholder="结束日期"-->
<!--            value-format="yyyy-MM-dd"-->
<!--            @change="timeChange"-->
<!--            clearable="false"-->
<!--          </el-date-picker>-->





            </span>
      </div>
    </header>
    <section style="width:100%;height: 19%;position: relative;">
      <div @click="chooseLevel('3')"       :style="'cursor:pointer;position: absolute;top:10%;left: 3%;width:16.4%;border-radius:22px;height: 90%;box-shadow:0px 0px 5px rgba(178,176,179,0.5);background:'+threeLevelBg">
        <div style="height: calc(25% - 0px);position: relative;display: inline-block">
          <img style="height:100%" :src="require('../../assets/images/'+threeLevelPic)"/>
          <div style="position: absolute;top:40%;left:0;color: white;font-weight: bold;text-align: center;width:100%;transform:translateY(-50%) ">
            <span :style="'font-size: 1.2vw;color:'+threeLevelBg">3</span>
            <span :style="'font-size: 1.2vw;color:'+threeLevelBg">级</span>
          </div>
        </div>
        <div :style="'width: 100%;text-align: center;font-size: 2.5vw;position: absolute;top:30%;color:'+threeLevelColor">{{threeLevelScore}}</div>
        <div :style="'width: 100%;text-align: center;font-size: 0.9vw;position: absolute;top:65%;;font-weight: bold;color:'+threeLevelDesc">最高：{{threeLevelMaxScore}}丨最低：{{threeLevelMinScore}}</div>
      </div>

      <div @click="chooseLevel('4')" :style="'cursor:pointer;position: absolute;top:10%;left: 22.4%;width:16.4%;border-radius:22px;height: 90%;box-shadow:0px 0px 5px rgba(178,176,179,0.5);background:'+fourLevelBg">
        <div style="height: calc(25% - 0px);position: relative;display: inline-block">
          <img style="height:100%" :src="require('../../assets/images/'+fourLevelPic)"/>
          <div style="position: absolute;top:40%;left:0;color: white;font-weight: bold;text-align: center;width:100%;transform:translateY(-50%) ">
            <span :style="'font-size: 1.2vw;color:'+fourLevelBg">4</span>
            <span :style="'font-size: 1.2vw;color:'+fourLevelBg">级</span>
          </div>
        </div>
        <div :style="'width: 100%;text-align: center;font-size: 2.5vw;position: absolute;top:30%;color:'+fourLevelColor">{{fourLevelScore}}</div>
        <div :style="'width: 100%;text-align: center;font-size: 0.9vw;position: absolute;top:65%;;font-weight: bold;color:'+fourLevelDesc">最高：{{fourLevelMaxScore}}丨最低：{{fourLevelMinScore}}</div>
      </div>

      <div @click="chooseLevel('5')" :style="'cursor:pointer;position: absolute;top:10%;left: 41.8%;width:16.4%;border-radius:22px;height: 90%;box-shadow:0px 0px 5px rgba(178,176,179,0.5);background:'+fiveLevelBg">
        <div style="height: calc(25% - 0px);position: relative;display: inline-block">
          <img style="height:100%" :src="require('../../assets/images/'+fiveLevelPic)"/>
          <div style="position: absolute;top:40%;left:0;color: white;font-weight: bold;text-align: center;width:100%;transform:translateY(-50%) ">
            <span :style="'font-size: 1.2vw;color:'+fiveLevelBg">5</span>
            <span :style="'font-size: 1.2vw;color:'+fiveLevelBg">级</span>
          </div>
        </div>
        <div :style="'width: 100%;text-align: center;font-size: 2.5vw;position: absolute;top:30%;color:'+fiveLevelColor">{{fiveLevelScore}}</div>
        <div :style="'width: 100%;text-align: center;font-size: 0.9vw;position: absolute;top:65%;font-weight: bold;color:'+fiveLevelDesc">最高：{{fiveLevelMaxScore}}丨最低：{{fiveLevelMinScore}}</div>
      </div>

      <div @click="chooseLevel('6')" :style="'cursor:pointer;position: absolute;top:10%;left: 61.2%;width:16.4%;border-radius:22px;height: 90%;box-shadow:0px 0px 5px rgba(178,176,179,0.5);background:'+sixLevelBg">
        <div style="height: calc(25% - 0px);position: relative;display: inline-block">
          <img style="height:100%" :src="require('../../assets/images/'+sixLevelPic)"/>
          <div style="position: absolute;top:40%;left:0;color: white;font-weight: bold;text-align: center;width:100%;transform:translateY(-50%) ">
            <span :style="'font-size: 1.2vw;color:'+sixLevelBg">6</span>
            <span :style="'font-size: 1.2vw;color:'+sixLevelBg">级</span>
          </div>
        </div>
        <div :style="'width: 100%;text-align: center;font-size: 2.5vw;position: absolute;top:30%;color:'+sixLevelColor">{{sixLevelScore}}</div>
        <div :style="'width: 100%;text-align: center;font-size: 0.9vw;position: absolute;top:65%;font-weight: bold;color:'+sixLevelDesc">最高：{{sixLevelMaxScore}}丨最低：{{sixLevelMinScore}}</div>
      </div>

      <div @click="chooseLevel('7')" :style="'cursor:pointer;position: absolute;top:10%;left: 80.6%;width:16.4%;border-radius:22px;height: 90%;box-shadow:0px 0px 5px rgba(178,176,179,0.5);background:'+sevenLevelBg">
        <div style="height: calc(25% - 0px);position: relative;display: inline-block">
          <img style="height:100%" :src="require('../../assets/images/'+sevenLevelPic)"/>
          <div style="position: absolute;top:40%;left:0;color: white;font-weight: bold;text-align: center;width:100%;transform:translateY(-50%) ">
            <span :style="'font-size: 1.2vw;color:'+sevenLevelBg">7</span>
            <span :style="'font-size: 1.2vw;color:'+sevenLevelBg">级</span>
          </div>
        </div>
        <div :style="'width: 100%;text-align: center;font-size: 2.5vw;position: absolute;top:30%;color:'+sevenLevelColor">{{sevenLevelScore}}</div>
        <div :style="'width: 100%;text-align: center;font-size: 0.9vw;position: absolute;top:65%;font-weight: bold;color:'+sevenLevelDesc">最高：{{sevenLevelMaxScore}}丨最低：{{sevenLevelMinScore}}</div>
      </div>


    </section>
    <section style="position: relative;height: 29%;">
      <div style="border-radius:16px;box-shadow:0px 0px 5px rgba(178,176,179,0.5);width:94%;height:85%;position: absolute;top:15%;left:3%;">
        <div  class="triangle" v-show="triangleShow=='3'"></div>
        <div class="triangle2" v-show="triangleShow=='4'"></div>
        <div class="triangle3" v-show="triangleShow=='5'"></div>
        <div class="triangle4" v-show="triangleShow=='6'"></div>
        <div class="triangle5" v-show="triangleShow=='7'"></div>
        <div style="width:30%;height:100%;position: absolute;left:0;">
          <div style="font-size: 1vw;position: absolute;left:5%;top:5%;"><span style="border:3px solid #078BDE;"></span>&nbsp;&nbsp;&nbsp;&nbsp;明细分值</div>
          <div style="font-size: 0.8vw;position: absolute;left:10%;top:40%;">基本项目（{{baseItemPercent}}%）：<span :style="'color:'+baseItemColor">{{baseItemScore}}</span></div>
          <div style="font-size: 0.8vw;position: absolute;left:10%;top:60%;">选择项目（{{chooseItemPercent}}%）：<span :style="'color:'+chooseItemColor">{{chooseItemScore}}</span></div>
        </div>
        <div style="width:70%;height:100%;position: absolute;left:30%;">
          <div style="width:20%;height: 100%;position: absolute;left: 0;" >
            <div id="consistency" style="width:100%;height: 100%;" v-show="consistencyShow">

            </div>
          </div>

          <div style="width:20%;height: 100%;position: absolute;left: 25%;">
            <div id="integrity" style="width:100%;height: 100%;" v-show="integrityShow">

            </div>
          </div>

          <div style="width:20%;height: 100%;position: absolute;left: 50%;">
            <div id="integration" style="width:100%;height: 100%;" v-show="integrationShow">

            </div>
          </div>

          <div style="width:20%;height: 100%;position: absolute;left: 75%;">
            <div id="timeliness" style="width:100%;height: 100%;" v-show="timelinessShow">

            </div>
          </div>
        </div>




      </div>
    </section>
    <footer style="position: relative;height:calc(52% - 63px);overflow: hidden;">
      <section style="position: absolute;border:1px solid rgba(228, 228, 228, 1);left:3%;top:8%;right:70%;height:91%;">
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
      <section style="position: absolute;border:1px solid rgba(228, 228, 228, 1);left:32%;top:8%;right:3%;height:91%;">
        <div class="qualityTitle">
          <div class="iconfont" style="display:inline-block;margin:0 10px 0 20px;float:left;font-size: 1.5vw;color:#078BDE;">&#xe6d3;
          </div>
          <span style="font-size: 1vw;">数据质量趋势图</span>
        </div>
        <div style="width:100%;height: calc(100% - 2.5vw);position: absolute;left: 0;">
          <div style="position: absolute;left:1%;right:1%;top:4%;z-index:9999;height:10%;">
<!--                    <span style="float:left;font-size:0.2vw;">时间：-->
<!--                      <el-select v-model="dataQualityTrendTime" placeholder="请选择" style="font-size:0.1vw;" size="mini">-->
<!--                        <el-option-->
<!--                          v-for="item in timeOptions"-->
<!--                          :key="item.value"-->
<!--                          :label="item.label"-->
<!--                          :value="item.value">-->
<!--                        </el-option>-->
<!--                      </el-select>-->
<!--                    </span>-->

            <span style="float:left;margin-left:10px;font-size:0.2vw;" clearable>等级：
                    <el-select v-model="dataQualityTrendLevel" placeholder="请选择" style="" size="mini" clearable @change="changeLevelFunction" :disabled="chooseDisabled">
                      <el-option
                        v-for="item in levelOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </span>

            <span style="float:left;margin-left:10px;font-size:0.2vw;" >项目分类：
                    <el-select v-model="dataQualityProject" placeholder="请选择" style="" size="mini" clearable @change="changeChooseFunction" :disabled="chooseDisabled">
                      <el-option
                        v-for="item in projectOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </span>

            <span style="position: absolute;right:0%;top:40%;">
                       <el-checkbox-group
                         v-model="checkedTypes" @change="changeType" :disabled="chooseDisabled">
                            <el-checkbox v-for="oneType in types" :label="oneType.ID" :key="oneType.ID" :value="oneType.ID">{{oneType.NAME}}</el-checkbox>
                      </el-checkbox-group>
                  </span>

            <span style="margin-top:35px;float:right;margin-right: 0px;font-size:16px;" v-show="trendTitleShow">{{trendTitle}}详情<img @click="returnData" style="height:20px;cursor:pointer;vertical-align: middle;" :src="require('../../assets/images/back.png')" title="返回月视图" /></span>



          </div>
          <div id="dataQualityTrend" style="width:100%;height: 90%;position: absolute;top:10%;">

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

        scorePngRed:'redLevel.png',
        scorePngYellow:'yellowLevel.png',
        scorePngGreen:'level_bg.png',

        scorePngChoose:'whiteLevel.png',
        defaultColor:'rgba(255,255,255,1)',
        unChooseColorNextLine:'rgba(153,153,153,1)',


        timeRange:'month',
        timeFrom:'',
        timeEnd:'',
        dateRange:'',

        threeLevelScore:'',
        threeLevelMinScore:'',
        threeLevelMaxScore:'',
        threeLevelColor:'',
        threeLevelPic:'',
        threeLevelBg:'rgba(255,255,255,1)',
        threeLevelDesc:'rgba(153,153,153,1)',


        fourLevelScore:'',
        fourLevelMinScore:'',
        fourLevelMaxScore:'',
        fourLevelColor:'',
        fourLevelPic:'',
        fourLevelBg:'rgba(255,255,255,1)',
        fourLevelDesc:'rgba(153,153,153,1)',

        fiveLevelScore:'',
        fiveLevelMinScore:'',
        fiveLevelMaxScore:'',
        fiveLevelColor:'',
        fiveLevelPic:'',
        fiveLevelBg:'rgba(255,255,255,1)',
        fiveLevelDesc:'rgba(153,153,153,1)',

        sixLevelScore:'',
        sixLevelMinScore:'',
        sixLevelMaxScore:'',
        sixLevelColor:'',
        sixLevelPic:'',
        sixLevelBg:'rgba(255,255,255,1)',
        sixLevelDesc:'rgba(153,153,153,1)',

        sevenLevelScore:'',
        sevenLevelMinScore:'',
        sevenLevelMaxScore:'',
        sevenLevelColor:'',
        sevenLevelPic:'',
        sevenLevelBg:'rgba(255,255,255,1)',
        sevenLevelDesc:'rgba(153,153,153,1)',

        projectCode:'3',
        baseItemScore:'0',
        baseItemColor:'',
        chooseItemScore:'0',
        chooseItemColor:'',
        baseItemPercent:'0',
        chooseItemPercent:'0',

        consistencyShow:false,
        integrityShow:false,
        integrationShow:false,
        timelinessShow:false,




        //timeOptions:[{value:'month',label:'月'},{value:'week',label:'星期'},{value:'day',label:'天'}],
        formatType:'month',
        timeOptions:[{value:'month',label:'月'},{value:'day',label:'天'}],
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
        jiHeRule:'',
        dataQualityTrend:'',
        optionConsistencyCircle: '',
        optionIntegrityCircle: '',
        optionIntegrationCircle: '',
        optionTimelinessCircle: '',
        optionJiHeRule:'',
        optionDataQualityTrendHistory:'',
        triangleShow:3,
        chooseDisabled:false,
        trendTitle:"",
        trendTitleShow:false,

      }
    },
    methods:{
      changeTime(value){
        if (value != "custom") {
          this.triangleShow = 3;
          this.projectCode = 3;
          this.getRankScore();
          this.getSecondLeft();
          this.getSecondRight();
        }
      },
      timeFromChange(value){
        if (this.timeFrom != "" && this.timeFrom != null && this.timeEnd != "" && this.timeEnd != null) {
          this.triangleShow = 3;
          this.projectCode = 3;
          this.getRankScore();
          this.getSecondLeft();
          this.getSecondRight();
        }



      },
      timeEndChange(value) {
        if (this.timeFrom != "" && this.timeFrom != null && this.timeEnd != "" && this.timeEnd != null) {
          this.triangleShow = 3;
          this.projectCode = 3;
          this.getRankScore();
          this.getSecondLeft();
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
      getColorPng(score){
        if (score >= 90) {
          return this.scorePngGreen;
        }
        if (score <= 50) {
          return this.scorePngRed;
        }
        return this.scorePngYellow;
      },
      getRankScore: function () {
        let ths = this;
        ths.$axios({
          method: 'post',
          url: '/hip-dqms/emrQualityController/rankScore',
          data: {
            timeRange: ths.timeRange,
            timeFrom: ths.timeFrom,
            timeEnd: ths.timeEnd
          }
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            var rankScore = res.data.data.rankScore;

            for(var x in rankScore){
            // rankScore.forEach((function(value,key){
            //   console.log(rankScore[x],x);
              var value = rankScore[x];
              if(x=='3'){
                ths.threeLevelScore = parseInt(value.score);
                ths.threeLevelMinScore = parseInt(value.minScore);
                ths.threeLevelMaxScore = parseInt(value.maxScore);
                ths.threeLevelColor = ths.getColor(value.score);
                ths.threeLevelPic = ths.getColorPng(value.score);
              }else if (x=='4') {
                ths.fourLevelScore = parseInt(value.score);
                ths.fourLevelMinScore = parseInt(value.minScore);
                ths.fourLevelMaxScore = parseInt(value.maxScore);
                ths.fourLevelColor = ths.getColor(value.score);
                ths.fourLevelPic = ths.getColorPng(value.score);
              }else if (x=='5') {
                ths.fiveLevelScore = parseInt(value.score);
                ths.fiveLevelMinScore = parseInt(value.minScore);
                ths.fiveLevelMaxScore = parseInt(value.maxScore);
                ths.fiveLevelColor = ths.getColor(value.score);
                ths.fiveLevelPic = ths.getColorPng(value.score);
              }else if (x=='6') {
                ths.sixLevelScore = parseInt(value.score);
                ths.sixLevelMinScore = parseInt(value.minScore);
                ths.sixLevelMaxScore = parseInt(value.maxScore);
                ths.sixLevelColor = ths.getColor(value.score);
                ths.sixLevelPic = ths.getColorPng(value.score);
              }else if (x=='7') {
                ths.sevenLevelScore = parseInt(value.score);
                ths.sevenLevelMinScore = parseInt(value.minScore);
                ths.sevenLevelMaxScore = parseInt(value.maxScore);
                ths.sevenLevelColor = ths.getColor(value.score);
                ths.sevenLevelPic = ths.getColorPng(value.score);
              }
            }
            ths.changeBgColor();
          } else {
            ths.$message({
              message: '获取电子病历数据质量第一行数据失败！' + res.data.errorMessage,
              duration: '1000',
              type: 'error',
            });
          }
        });
      },

      getSecondLeft:function(){
        let ths = this;
        ths.$axios({
          method: 'post',
          url: '/hip-dqms/emrQualityController/itemDetail',
          data: {
            timeRange: ths.timeRange,
            timeFrom: ths.timeFrom,
            timeEnd: ths.timeEnd,
            projectCode: ths.projectCode
          }
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
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
              message: '获取电子病历数据质量第二行左边数据失败！' + res.data.errorMessage,
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
          url: '/hip-dqms/emrQualityController/detailScore',
          data: {
            timeRange: ths.timeRange,
            timeFrom: ths.timeFrom,
            timeEnd: ths.timeEnd,
            projectCode: ths.projectCode
          }
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            var detailScore = res.data.data.detailScore;
            ths.consistencyShow = false;
            ths.integrityShow = false;
            ths.integrationShow = false;
            ths.timelinessShow = false;
            // consistencyCircle:'',
            //   integrityCircle:'',
            //   integrationCircle:'',
            //   timelinessCircle:'',
            if (ths.consistencyCircle != null && ths.consistencyCircle != "") {
              ths.consistencyCircle.dispose();
            }
            if (ths.integrityCircle != null && ths.integrityCircle != "") {
              ths.integrityCircle.dispose();
            }
            if (ths.integrationCircle != null && ths.integrationCircle != "") {
              ths.integrationCircle.dispose();
            }
            if (ths.timelinessCircle != null && ths.timelinessCircle != "") {
              ths.timelinessCircle.dispose();
            }
            detailScore.forEach((x, y) => {
              if ("一致性" == x.NAME) {
                ths.consistencyShow = true;
                if (x.SCORE == undefined) {
                  x.SCORE = 0;
                }
                this.$nextTick(function () {
                  ths.initConsistencyCircle(x.SCORE, ths.getColor(x.SCORE));
                });
              } else if ("完整性" == x.NAME) {
                ths.integrityShow = true;
                if (x.SCORE == undefined) {
                  x.SCORE = 0;
                }
                this.$nextTick(function () {
                  ths.initIntegrityCircle(x.SCORE, ths.getColor(x.SCORE));
                });
              } else if ("整合性" == x.NAME) {
                ths.integrationShow = true;
                if (x.SCORE == undefined) {
                  x.SCORE = 0;
                }
                this.$nextTick(function () {
                  ths.initIntegrationCircle(x.SCORE, ths.getColor(x.SCORE));
                });
              } else if ("及时性" == x.NAME) {
                ths.timelinessShow = true;
                if (x.SCORE == undefined) {
                  x.SCORE = 0;
                }
                this.$nextTick(function () {
                  ths.initTimelinessCircle(x.SCORE, ths.getColor(x.SCORE));
                });
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

      listDataQualityTrendTypes() {
        let ths = this;
        ths.$axios({
          method: 'post',
          url: '/hip-dqms/emrQualityController/listDataQualityTrendTypes',
          data: {
            modelId:'dzbl'
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




      chooseLevel(level) {
        let ths = this;
        if (this.timeRange == "custom" && ((this.timeFrom == null || this.timeFrom == "") || (this.timeEnd == null || this.timeEnd == ""))) {
          this.$message({
            message: '请选择时间范围！',
            duration: '1000',
            type: 'error',
          });
          return;
        }
        this.projectCode = level;
        this.triangleShow = level;
        this.getSecondLeft();
        this.getSecondRight();
        this.changeBgColor();
      },

      changeBgColor(){
        let ths = this;
        if (ths.triangleShow == 3) {
          ths.threeLevelColor = ths.defaultColor;
          ths.threeLevelBg = ths.getColor(ths.threeLevelScore);
          ths.threeLevelPic = ths.scorePngChoose;
          ths.threeLevelDesc = ths.defaultColor;

          ths.fourLevelColor = ths.getColor(ths.fourLevelScore);
          ths.fourLevelBg = ths.defaultColor;
          ths.fourLevelPic = ths.getColorPng(ths.fourLevelScore);
          ths.fourLevelDesc = ths.unChooseColorNextLine;

          ths.fiveLevelColor = ths.getColor(ths.fiveLevelScore);
          ths.fiveLevelBg = ths.defaultColor;
          ths.fiveLevelPic = ths.getColorPng(ths.fiveLevelScore);;
          ths.fiveLevelDesc = ths.unChooseColorNextLine;

          ths.sixLevelColor = ths.getColor(ths.sixLevelScore);
          ths.sixLevelBg = ths.defaultColor;
          ths.sixLevelPic = ths.getColorPng(ths.sixLevelScore);;
          ths.sixLevelDesc = ths.unChooseColorNextLine;

          ths.sevenLevelColor = ths.getColor(ths.sevenLevelScore);
          ths.sevenLevelBg = ths.defaultColor;
          ths.sevenLevelPic = ths.getColorPng(ths.sevenLevelScore);;
          ths.sevenLevelDesc = ths.unChooseColorNextLine;

        } else if (ths.triangleShow == 4) {
          ths.fourLevelColor = ths.defaultColor;
          ths.fourLevelBg = ths.getColor(ths.fourLevelScore);
          ths.fourLevelPic = ths.scorePngChoose;
          ths.fourLevelDesc = ths.defaultColor;

          ths.threeLevelColor = ths.getColor(ths.threeLevelScore);
          ths.threeLevelBg = ths.defaultColor;
          ths.threeLevelPic = ths.getColorPng(ths.threeLevelScore);
          ths.threeLevelDesc = ths.unChooseColorNextLine;

          ths.fiveLevelColor = ths.getColor(ths.fiveLevelScore);
          ths.fiveLevelBg = ths.defaultColor;
          ths.fiveLevelPic = ths.getColorPng(ths.fiveLevelScore);;
          ths.fiveLevelDesc = ths.unChooseColorNextLine;

          ths.sixLevelColor = ths.getColor(ths.sixLevelScore);
          ths.sixLevelBg = ths.defaultColor;
          ths.sixLevelPic = ths.getColorPng(ths.sixLevelScore);;
          ths.sixLevelDesc = ths.unChooseColorNextLine;

          ths.sevenLevelColor = ths.getColor(ths.sevenLevelScore);
          ths.sevenLevelBg = ths.defaultColor;
          ths.sevenLevelPic = ths.getColorPng(ths.sevenLevelScore);;
          ths.sevenLevelDesc = ths.unChooseColorNextLine;

        } else if (ths.triangleShow == 5) {
          ths.fiveLevelColor = ths.defaultColor;
          ths.fiveLevelBg = ths.getColor(ths.fiveLevelScore);
          ths.fiveLevelPic = ths.scorePngChoose;
          ths.fiveLevelDesc = ths.defaultColor;


          ths.threeLevelColor = ths.getColor(ths.threeLevelScore);
          ths.threeLevelBg = ths.defaultColor;
          ths.threeLevelPic = ths.getColorPng(ths.threeLevelScore);
          ths.threeLevelDesc = ths.unChooseColorNextLine;

          ths.fourLevelColor = ths.getColor(ths.fourLevelScore);
          ths.fourLevelBg = ths.defaultColor;
          ths.fourLevelPic = ths.getColorPng(ths.fourLevelScore);
          ths.fourLevelDesc = ths.unChooseColorNextLine;

          ths.sixLevelColor = ths.getColor(ths.sixLevelScore);
          ths.sixLevelBg = ths.defaultColor;
          ths.sixLevelPic = ths.getColorPng(ths.sixLevelScore);;
          ths.sixLevelDesc = ths.unChooseColorNextLine;

          ths.sevenLevelColor = ths.getColor(ths.sevenLevelScore);
          ths.sevenLevelBg = ths.defaultColor;
          ths.sevenLevelPic = ths.getColorPng(ths.sevenLevelScore);;
          ths.sevenLevelDesc = ths.unChooseColorNextLine;
        } else if (ths.triangleShow == 6) {
          ths.sixLevelColor = ths.defaultColor;
          ths.sixLevelBg = ths.getColor(ths.sixLevelScore);
          ths.sixLevelPic = ths.scorePngChoose;
          ths.sixLevelDesc = ths.defaultColor;


          ths.threeLevelColor = ths.getColor(ths.threeLevelScore);
          ths.threeLevelBg = ths.defaultColor;
          ths.threeLevelPic = ths.getColorPng(ths.threeLevelScore);
          ths.threeLevelDesc = ths.unChooseColorNextLine;

          ths.fourLevelColor = ths.getColor(ths.fourLevelScore);
          ths.fourLevelBg = ths.defaultColor;
          ths.fourLevelPic = ths.getColorPng(ths.fourLevelScore);
          ths.fourLevelDesc = ths.unChooseColorNextLine;

          ths.fiveLevelColor = ths.getColor(ths.fiveLevelScore);
          ths.fiveLevelBg = ths.defaultColor;
          ths.fiveLevelPic = ths.getColorPng(ths.fiveLevelScore);;
          ths.fiveLevelDesc = ths.unChooseColorNextLine;

          ths.sevenLevelColor = ths.getColor(ths.sevenLevelScore);
          ths.sevenLevelBg = ths.defaultColor;
          ths.sevenLevelPic = ths.getColorPng(ths.sevenLevelScore);;
          ths.sevenLevelDesc = ths.unChooseColorNextLine;

        } else if (ths.triangleShow == 7) {
          ths.sevenLevelColor = ths.defaultColor;
          ths.sevenLevelBg = ths.getColor(ths.sevenLevelScore);
          ths.sevenLevelPic = ths.scorePngChoose;
          ths.sevenLevelDesc = ths.defaultColor;


          ths.threeLevelColor = ths.getColor(ths.threeLevelScore);
          ths.threeLevelBg = ths.defaultColor;
          ths.threeLevelPic = ths.getColorPng(ths.threeLevelScore);
          ths.threeLevelDesc = ths.unChooseColorNextLine;

          ths.fourLevelColor = ths.getColor(ths.fourLevelScore);
          ths.fourLevelBg = ths.defaultColor;
          ths.fourLevelPic = ths.getColorPng(ths.fourLevelScore);
          ths.fourLevelDesc = ths.unChooseColorNextLine;

          ths.fiveLevelColor = ths.getColor(ths.fiveLevelScore);
          ths.fiveLevelBg = ths.defaultColor;
          ths.fiveLevelPic = ths.getColorPng(ths.fiveLevelScore);;
          ths.fiveLevelDesc = ths.unChooseColorNextLine;

          ths.sixLevelColor = ths.getColor(ths.sixLevelScore);
          ths.sixLevelBg = ths.defaultColor;
          ths.sixLevelPic = ths.getColorPng(ths.sixLevelScore);;
          ths.sixLevelDesc = ths.unChooseColorNextLine;


        }
      },




      initConsistencyCircle(value,color){
        var array = new Array();
        array.push(color);
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
              fontSize: '16',
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

        this.consistencyCircle = this.$echarts.init(document.getElementById('consistency'));
        this.consistencyCircle.setOption(this.optionConsistencyCircle);
      },

      initIntegrityCircle(value,color){
        var array = new Array();
        array.push(color);
        this.optionIntegrityCircle = {
          title: {
            text: value+'\n{colorChoose|完整性}',
            //subtext:'完整性',
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'bold',
              color: color,
              fontSize: '16',
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
        this.integrityCircle.setOption(this.optionIntegrityCircle);
        let _this = this;
      },
      initIntegrationCircle(value,color){
        var array = new Array();
        array.push(color);
        this.optionIntegrationCircle = {
          title: {
            text: value+'\n{colorChoose|整合性}',
            //subtext:'整合性',
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'bold',
              color: color,
              fontSize: '16',
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
        this.integrationCircle.setOption(this.optionIntegrationCircle);
        let _this = this;
      },
      initTimelinessCircle(value,color){
        var array = new Array();
        array.push(color);
        this.optionTimelinessCircle = {
          title: {
            text: value+'\n{colorChoose|及时性}',
            //subtext:'及时性',
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'bold',
              color: color,
              fontSize: '16',
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
        this.timelinessCircle.setOption(this.optionTimelinessCircle);
      },
      initJiHeRule(){
        let ths = this;
        ths.$axios({
          method: 'post',
          url: '/hip-dqms/emrQualityController/auditCount',
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            var baseAudit = res.data.data.baseAudit;
            var chooseAudit = res.data.data.chooseAudit;
            this.optionJiHeRule = {
              legend: {
                itemHeight: 12,
                itemWidth: 12,
                itemGap:9,
                top:1
              },
              tooltip: {},
              dataset: {
                source: [
                  ['product', '等级3','等级4','等级5','等级6','等级7'],
                  // ['基本规则', 1,2,3,4,8],
                  // ['选择规则', 5,7,6,9,9]
                ]
              },
              color: [
                'rgba(43,159,255,1)',
                'rgba(7,209,222,1)',
                'rgba(70,209,119,1)',
                'rgba(255,205,52,1)',
                'rgba(254,104,104,1)'
              ],
              grid: {
                top: '50',
                left: '2%',
                right: '2%',
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
                {type: 'bar', itemStyle: {normal: {barBorderRadius: 5}}}
              ]
            };

            this.optionJiHeRule.dataset.source.push(baseAudit);
            this.optionJiHeRule.dataset.source.push(chooseAudit);

            this.jiHeRule = this.$echarts.init(document.getElementById('jiHeRule'));
            this.jiHeRule.setOption(this.optionJiHeRule);
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
          url: '/hip-dqms/emrQualityController/listDataQualityTrendData',
          data: {
            projectCode: dataQualityTrendLevelIndeed,
            formatType: ths.formatType,
            checkedTypes: ths.checkedTypes,
            dataQualityProject: dataQualityProjectIndeed,
            modelId:'dzbl'
          }
        }).then(res => {
          if (res.status == 200 && res.data.code == 200) {
            var score = res.data.data.score;
            var date = res.data.data.date;

            // console.info(score);
            // console.info(date);

            var optionDataQualityTrend = {
              tooltip: {
                trigger: 'axis',
                confine: true,
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
              ths.trendTitleShow = true;
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
                  modelId:'dzbl'
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
        this.trendTitleShow = false;
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
        }
    },
    created() {
      this.getRankScore();
      this.getSecondLeft();
      this.getSecondRight();
      this.listDataQualityTrendTypes();

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

  /*.triangle {*/
  /*  width: 0;*/
  /*  height: 0;*/
  /*  border-width: 20px;*/
  /*  border-style: solid;*/
  /*  !*border-right: 10px solid #e5e5e5;*!*/
  /*  !*border-top: 10px solid transparent;*!*/
  /*  !*border-bottom: 10px solid transparent;*!*/
  /*  position: absolute;*/
  /*  top: -40px;*/
  /*  left: 8%;*/
  /*  border-color: transparent transparent grey transparent;*/
  /*  !*box-shadow:0px 0px 15px rgb(102, 102, 102);*!*/
  /*}*/


  .triangle {
    position: absolute;
    top: -10px;
    left: 8%;
    margin-left: -10px;
  }
  .triangle:after {
    position: absolute;
    display: inline-block;
    width: 0;
    height: 0px;
    content: '';
    border-style: solid;
    border-width: 10px;
    border-color: #fff #fff transparent transparent;
    transform: rotate(315deg);
    box-shadow: 2px -2px 2px rgba(204,204,204,0.5);
  }

  .triangle2 {
    position: absolute;
    top: -10px;
    left: 29%;
    margin-left: -10px;
  }
  .triangle2:after {
    position: absolute;
    display: inline-block;
    width: 0;
    height: 0px;
    content: '';
    border-style: solid;
    border-width: 10px;
    border-color: #fff #fff transparent transparent;
    transform: rotate(315deg);
    box-shadow: 2px -2px 2px rgba(204,204,204,0.5);
  }

  .triangle3 {
    position: absolute;
    top: -10px;
    left: 49%;
    margin-left: -10px;
  }
  .triangle3:after {
    position: absolute;
    display: inline-block;
    width: 0;
    height: 0px;
    content: '';
    border-style: solid;
    border-width: 10px;
    border-color: #fff #fff transparent transparent;
    transform: rotate(315deg);
    box-shadow: 2px -2px 2px rgba(204,204,204,0.5);
  }

  .triangle4 {
    position: absolute;
    top: -10px;
    left: 70%;
    margin-left: -10px;
  }
  .triangle4:after {
    position: absolute;
    display: inline-block;
    width: 0;
    height: 0px;
    content: '';
    border-style: solid;
    border-width: 10px;
    border-color: #fff #fff transparent transparent;
    transform: rotate(315deg);
    box-shadow: 2px -2px 2px rgba(204,204,204,0.5);
  }


  .triangle5 {
    position: absolute;
    top: -10px;
    left: 91%;
    margin-left: -10px;
  }
  .triangle5:after {
    position: absolute;
    display: inline-block;
    width: 0;
    height: 0px;
    content: '';
    border-style: solid;
    border-width: 10px;
    border-color: #fff #fff transparent transparent;
    transform: rotate(315deg);
    box-shadow: 2px -2px 2px rgba(204,204,204,0.5);
  }

  .qualityTitle {
    #height: 35px;
    height: 2.5vw;
    line-height: 2.5vw;
    background: #E6F3FC;
  }

  .el-checkbox{
    margin-right: 5px;
  }





</style>
