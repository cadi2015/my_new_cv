<template>
  <div>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4" class="mySite">
        <el-link href="https://blog.csdn.net/cadi2011" :underline="false" target="_blank">
          <el-image :src="require('../assets/csdn.png')" fit="fill" class="csdn">
          </el-image>
          <!--发现不能用.ico的文件，我直接改名为png-->
        </el-link>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <h2 class="hi"> Hi!</h2>
        <h3 class="sayHi">
          {{ sayHello }}<strong>{{ sayHelloName }}</strong>
        </h3>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div class="simpleIntroduce">[ {{ introduce }} ]</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-image class="myPhoto" :src="require('../assets/myself.jpg')">
        </el-image>
      </el-col>
    </el-row>

    <el-row class="myjob-zone">
      <el-col :span="24">
        <div class="myJob">{{ job }}</div>
      </el-col>
    </el-row>

    <el-row class="ability-row">
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="ability-item">
          <h3 class="ability-header">Python</h3>
          <p class="ability-content">
            Web后端应用,桌面应用,自动化程序
          </p>
        </div>
      </el-col>

      <el-col :span="4">
        <div class="ability-item">
          <h3 class="ability-header">Java</h3>
          <p class="ability-content">
            Android App,Ui自动化测试程序
          </p>
        </div>
      </el-col>

      <el-col :span="4">
        <div class="ability-item">
          <h3 class="ability-header">Shell</h3>
          <p class="ability-content">自动化测试程序</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="ability-item">
          <h3 class="ability-header">Java Script</h3>
          <p class="ability-content">Vue应用</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="14">
        <h3 class="jobTitle">"热爱工作"</h3>
        <div class="block">
          <el-timeline class="job">
            <el-timeline-item v-bind:timestamp="this.company.xiaomi.range" placement="top" class="time-item">
              <el-card>
                <div class="clearfix">
                  <el-image :src="require('../assets/mi.png')" fit="fill" class="companyLogo"></el-image>
                  <h3 class="company">{{ this.company.xiaomi.name }}</h3>
                </div>
                <h4 class="position">{{ this.company.xiaomi.position }}</h4>
                <!-- <p
                  v-bind:key="part"
                  v-for="part in company.xiaomi.content"
                  class="infoContent"
                >
                  {{ part }}
                </p> -->
              </el-card>
            </el-timeline-item>

            <el-timeline-item v-bind:timestamp="this.company.cm.range" placement="top">
              <el-card>
                <div class="clearfix">
                  <el-image :src="require('../assets/cm.png')" fit="fill" class="companyLogo"></el-image>
                  <h3 class="company">{{ this.company.cm.name }}</h3>
                </div>

                <h4 class="position">{{ this.company.cm.position }}</h4>
                <!-- <p
                  v-bind:key="part"
                  v-for="part in company.cm.content"
                  class="infoContent"
                >
                  {{ part }}
                </p> -->
              </el-card>
            </el-timeline-item>

            <el-timeline-item v-bind:timestamp="this.company.thunder.range" placement="top">
              <el-card>
                <div class="clearfix">
                  <el-image v-bind:src="require('../assets/xl.png')" class="companyLogo" fit="fill">
                  </el-image>
                  <h3 class="company">{{ this.company.thunder.name }}</h3>
                </div>
                <h4 class="position">{{ this.company.thunder.position }}</h4>
                <!-- <p
                  v-bind:key="part"
                  v-for="part in company.thunder.content"
                  class="infoContent"
                >
                  {{ part }}
                </p> -->
              </el-card>
            </el-timeline-item>

            <el-timeline-item v-bind:timestamp="this.company.wh.range" placement="top">
              <el-card>
                <div class="clearfix">
                  <el-image v-bind:src="require('../assets/wh.png')" class="companyLogo" fit="fill">
                  </el-image>
                  <h3 class="company">{{ this.company.wh.name }}</h3>
                </div>
                <h4 class="position">{{ this.company.wh.position }}</h4>
                <!-- <p
                  v-bind:key="part"
                  v-for="part in company.wh.content"
                  class="infoContent"
                >
                  {{ part }}
                </p> -->
              </el-card>
            </el-timeline-item>

            <el-timeline-item v-bind:timestamp="this.company.wk.range" placement="top">
              <el-card>
                <div class="clearfix">
                  <h3 class="company">{{ this.company.wk.name }}</h3>
                </div>

                <h4 class="position">{{ this.company.wk.position }}</h4>
                <!-- <p
                  v-bind:key="part"
                  v-for="part in company.wk.content"
                  class="infoContent"
                >
                  {{ part }}
                </p> -->
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-col>
    </el-row>

    <el-row class="life-zone">
      <el-col :span="24">
        <h3 class="title">"同样热爱生活"</h3>
      </el-col>
    </el-row>

    <el-row class="photo-zone">
      <el-col :span="6">
        <el-image class="myPhoto" :src="require('../assets/bike.jpg')">
        </el-image>
      </el-col>
      <el-col :span="6">
        <el-image class="myPhoto" :src="require('../assets/ukulele.jpg')">
        </el-image>
      </el-col>
      <el-col :span="6">
        <el-image class="myPhoto" :src="require('../assets/game.jpg')">
        </el-image>
      </el-col>
      <el-col :span="6">
        <el-image class="myPhoto" :src="require('../assets/street.jpg')">
        </el-image>
      </el-col>
    </el-row>

    <el-row class="photo-zone">
      <el-col :span="6" v-for="(item, index) in secondPictures" :key="index">
        <el-image class="myPhoto" :src="item">
        </el-image>
      </el-col>
    </el-row>

    <!-- <el-row type="flex" justify="center">
      <el-col :span="16">
        <h3 class="devProjectTitle">测试开发项目</h3>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane
            v-for="(detail, projectName) in myProject"
            v-bind:key="detail.name"
            v-bind:label="detail.name"
            v-bind:name="projectName"
          >
            <div class="projectContain">
              <div class="info-text clearfix titleContain">
                <h4 class="projectTitle">{{ detail.name }}</h4>
                <span class="range">{{ detail.range }}</span>
              </div>
              <div class="info-text">
                <span class="text-type">背景:</span>{{ detail.bg }}
              </div>
              <div class="info-text">
                <span class="text-type">内容:</span>{{ detail.content }}
              </div>
              <div class="info-text">
                <span class="text-type">如何:</span>{{ detail.how }}
              </div>
              <div class="info-text">
                <span class="text-type">成果:</span>{{ detail.success }}
              </div>
              <div class="info-text">
                <span class="text-type">技术栈:</span>{{ detail.tech }}
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      secondPictures: [require('@/assets/football.jpg'),require('@/assets/movegamer.jpg'),require('@/assets/rc_120.jpg'),require('@/assets/linke.jpg')],
      sayHello: "我的名字是",
      sayHelloName: "王鹏",
      introduce: "以下是我的介绍",
      job: "我是一名测试开发工程师",
      company: {
        xiaomi: {
          name: "小米集团",
          range: "2020/12-至今",
          position: "高级测试开发工程师",
          content: [
            `维护现有自动化工具，保障ui自动化程序的稳定运行相关技术栈：shell脚本、UiAutomator、python脚本、jenkins、Android
                  App、Html、Css","改造遍历程序，增加新的功能，适用于Camera
                  App，发现bug数量为monkey的3倍之多，增加日志分析，包括App、Anr、Native
                  相关技术栈：monkey源码分析与理解，根据App的特性，设计功能，确保稳定性`,
            `设计与开发图形界面工具应用，帮助手工测试同学提升自动化测试效率
                  相关技术栈：tkinter图形界面框架，线程间同步`,
            `
                  开发录制回放ui自动化程序，降低构建ui自动化程序程序成本，提高非必现问题的复测方式
                  相关技术栈：tkinter图形用户框架，airtest库，文件存储，shell脚本构建`,
            `
                  开发第三方公司使用图形用户界面程序，通过图形界面配置参数，唤起shell程序执行自动化测试
                  相关技术栈：tkinter图形用户界面框架,子进程通信，终端唤起等技术`,
          ],
        },
        cm: {
          name: "猎豹移动",
          range: "2018/06–2020/12",
          position: "高级测试开发工程师",
          content: [
            `
        LiveMe新业务线客户端App的研发流程测试工作，包括需求评审，需求分析，协调测试资源，分配测试用例任务、编写测试用例、跟踪测试执行，推上线进度，推动版本高质量、按时上线，保持零事故记录。
        `,
            `自主设计、独立开发UI全自动化项目，项目实现了手工测试所有环节的自动化，做到真正的全自动化。有效的替代了手工测试人力资源。负责UI自动化项目架构设计与二次开发:引入POM、调用链模式、模板方法模式、封装页面基类、封装测试用例基类、引入网络库、加入动态查找控件功能，解决UI自动化项目最难的稳定性与可靠性问题（各种偶现bug的处理），Jenkins搭建、开发后端应用负责收集数据、负责性能可视化报告自动生成，负责开发网络状态监测工具、本地云台建设等等。UI自动化项目实现了与竞品性能间的快速反馈测试，为开发团队优化性能提供了最有力、最快速的测试保障。大大提高了开发效率……以下为自动化前与自动化后的投入测试时间对比
手工测试：至少8小时（深夜进行测试）
自动化测试：仅占用1分钟手工测试时间（凌晨12点定时启动）
共计节约人力成本至少在40天以上……
相关技术栈：Java、Python、Jenkins、Shell、Junit4、Ui Automator、设计模式、本地存储、Gradle、JavaScript、Html、Linux`,
            `全体测试同学进行Python基础技术培训，帮助业务测试同学提高了Python技能：函数、对象、类`,
            `代表公司申请发明专利8个：《安卓可视化Monkey》、《多人共享服务端接口用例的平台方案》、《播放器SDK自动化测试的一个方法》、《RTC-SDK自动化测试的一个方法》、《安卓自动识别可调式设备的方法》、《安卓多台手机同屏操作的方法》、《安卓多个页面循环跳转的一个方法》、《UI自动化快速检查的办法》`,
          ],
        },
        thunder: {
          name: "深圳市迅雷网络技术有限公司（北研）",
          range: "2015/06–2017/06",
          position: "资深测试工程师",
          content: [
            `主导测试流程，独立或多人配合进行App端的需求上线测试工作，包括需求评审、用例编写、用例执行、推动开发过程中出现的任何问题、高质量推动上线`,
            `组织用例评审，负责用例评审相关事项在团队内的信息同步对齐，测试用例质量的提升`,
            `推动与协调产品、开发、UX、运营之间的合作，利用自身优势，保证最大限度的解决相互等待问题，对整个团队的工作进度起到巨大的推动作用`,
            `结合测试需求中的痛点，自主设计、自主开发效能工具App（Android），用于帮助测试与开发团队发挥最大工作效能，不仅节约了测试时间，也为测试团队的影响力做出巨大贡献，以下为工具投入前后的工作效能对比数据`,
            `负责协调硬件资源，借用同事私人测试机`,
            `推动产品经理体验App、推动设计师检查UI`,
            `积极帮助运营、UX、以及其他同事安装测试应用包`,
            `协助运营同学解答用户疑问，比如新版本特性、现有bug修复进度等情况`,
            `负责每个版本的内存占用测试`,
          ],
        },
        wh: {
          name: "文思海辉（北京）技术有限公司",
          range: "2013/06-2015/06",
          position: "测试工程师",
          content: [
            `负责腾讯网房产频道所有平台产品、包括浏览器产品房产前端（新房频道，二手房频道），数据库后台管理系统（CMS），移动端浏览器前端产品（触屏版），移动端app《看房》，移动端app《卖房通》，移动端app《腾讯新闻》房产模块的全部测试质量工作，控制产品测试流程管理，全力保证产品质量，积极推动产品按期上线，在职期间保持0事故！`,
            `跟踪产品前期需求变动，参与需求评审，对需求进行详尽的分析后提出可能的测试风险，提出产品需求策划遗漏建议，提出需求疑问，与产品经理校对最终需求详细逻辑后，归纳整理后通告团队所有成员， 积极与开发沟通并记录测试重点、测试难点`,
            `准备测试设计，确认测试任务（专项、安全、功能、兼容），制定测试计划（参考开发工期），分配人员(多测试人员)任务`,
            `构思测试用例框架，编写测试用例，分配人员，主导并主持测试用例评审，出具会议纪要`,
            `测试执行前期，提示产品经理体验，提示开发人员必须自测通过，再次暴露产品原型与设计对比并再次核实需求`,
            `正式提测，准确分析bug现象，确认bug后偏开发术语录入bug详细易懂描述，辅助捕捉log协助开发提高效率，帮助其它测试人员定位bug，汇总测试总进度后，向团队通告每日测试进度或者每周测试进度情况`,
            `主导产品测试进度，依据测试情况随时通告团队可能存在的上线日期风险，催促团队成员（开发、产品、设计、测试）密切协作保持高效率，积极主动推动项目进度。`,
            `根据测试进度，提示产品经理早日发出领导体验，尽可能将问题暴露在早期。`,
            `测试稳定封版期，提示团队成员关于产品部署生产环境注意事项，出具测试报告，预估上线风险范围`,
            `跟踪上线产品质量，每月固定走查线上产品版本的质量情况，对发现的线上bug进行分析，总结测试经验教训并通告`,
            `专项测试需求沟通，利用monkey工具，进行产品稳定性测试`,
          ],
        },
        wk: {
          name: "唯酷时代（北京）技术有限公司",
          range: "2011/08-2013/06",
          position: "软件测试工程师",
          content: [
            `根据项目编写部分测试用例，分析发现的bug，进行归类，复现。`,
            `负责对android手机的兼容性，系统软件功能测试，协调测试进度，确认及汇总测试结果。`,
            `第三方android应用测试，黑盒测试。`,
            `对于项目提出一些个人见解及时提交SQA，保证项目顺利量产。`,
            `同项目组一起跟进后期版本更新及维护。`,
            `参与全流程的测试项目平台有：MTK、展讯、高通。`,
            `参与外包项目，撰写软件BUG并提交于第三方，分析同事提交的bug，进行归类，积极与方案商沟通，协助项目经理尽快完善产品。`,
            `与项目经理进行手机天线场地测试，包括动态测试，静态弱信号测试。`,
            `积极通过网络推广产品。`,
            `担任客串客服，解决用户遇到的产品问题。`,
          ],
        },
      },
      myProject: {
        BossApp: {
          name: "BossApp",
          range: "2015/12-2017/06",
          bg: "功能测试团队没有效率工具,我这个工具是第一个测试工具，也是我第一次将测试过程中遇到的事情,试着去通过程序提高效率",
          content:
            "自主设计、自主开发效能工具App,用于帮助测试与开发团队发挥最大工作效能，不仅节约了测试时间，也为测试团队的影响力做出巨大贡献，以下为工具投入前后的工作效能对比数据",
          how: "怎么做的",
          success:
            "App切换服务端环境的时间由30s减少至1s;拷贝100个+个Bt种子文件到Android磁盘中,由2分钟减少至3s;复制不同协议的URL下载,过程由30s减少至1s;下载10个任务的时间的操作时间由2分钟减少至5s",
          tech: "Activity生命周期;Handler机制;相关布局:LinearLayout,RelativeLayout,FrameLayout,WebView;相关控件:TextView,Button,ImageView,ProgressBar,SeekBar;持久化:SharedPreference;组件跳转:Intent。数据结构:ArrayList,HashMap,Array;多线程:AsyncTask;SDK:Bugly。动画:。提示:Toast,SnackBar",
        },
        Monkey: {
          name: "Monkey自动化",
          range: "2015/12-2017/06",
          bg: "测试团队没有工具，总在重复做一些事情",
          content: "干点打杂的事情",
          how: "怎么做的",
          tech: "技术栈有哪些",
          success: "取得的成就",
        },
        PC: {
          name: "PC工具",
          range: "2015/12-2017/06",
          bg: "测试团队没有工具，总在重复做一些事情",
          content: "干点打杂的事情",
          how: "怎么做的",
          tech: "技术栈有哪些",
          success: "取得的成就",
        },
        Stress: {
          name: "压力测试",
          range: "2015/12-2017/06",
          bg: "测试团队没有工具，总在重复做一些事情",
          content: "干点打杂的事情",
          how: "怎么做的",
          tech: "技术栈有哪些",
          success: "取得的成就",
        },
        Record: {
          name: "录制回放",
          range: "2015/12-2017/06",
          bg: "测试团队没有工具，总在重复做一些事情",
          content: "干点打杂的事情",
          how: "怎么做的",
          tech: "技术栈有哪些",
          success: "取得的成就",
        },
        CLI: {
          name: "命令行图形界面执行器",
          range: "2015/12-2017/06",
          bg: "测试团队没有工具，总在重复做一些事情",
          content: "干点打杂的事情",
          how: "怎么做的",
          tech: "技术栈有哪些",
          success: "取得的成就",
        },
        SDk: {
          name: "SDK性能自动化测试",
          range: "2015/12-2017/06",
          bg: "测试团队没有工具，总在重复做一些事情",
          content:
            "自主设计、独立开发UI全自动化项目，项目实现了手工测试所有环节的自动化，做到真正的全自动化。有效的替代了手工测试人力资源。负责UI自动化项目架构设计与二次开发:引入POM、调用链模式、模板方法模式、封装页面基类、封装测试用例基类、引入网络库、加入动态查找控件功能，解决UI自动化项目最难的稳定性与可靠性问题（各种偶现bug的处理），Jenkins搭建、开发后端应用负责收集数据、负责性能可视化报告自动生成，负责开发网络状态监测工具、本地云台建设等等。UI自动化项目实现了与竞品性能间的快速反馈测试，为开发团队优化性能提供了最有力、最快速的测试保障。大大提高了开发效率……以下为自动化前与自动化后的投入测试时间对比",
          how: "怎么做的",
          tech: "Java、Python、Jenkins、Shell、Junit4、Ui Automator、设计模式、本地存储、Gradle、JavaScript、Html、Linux",
          success:
            "手工测试：至少8小时（深夜进行测试）自动化测试：仅占用30s的查看邮件报告时间手工测试时间（凌晨12点定时启动）。由于可以快速获取测试结果，研发团队得已高速研发",
        },
        Platform: {
          name: "测试平台",
          range: "2015/12-2017/06",
          bg: "测试团队没有工具，总在重复做一些事情",
          content: "干点打杂的事情",
          how: "怎么做的",
          tech: "技术栈有哪些",
          success: "取得的成就",
        },
      },
      technology: {
        Java: "",
        Python: "",
        Shell: "",
        Android: "",
        UiAutomator: "",
        Tkinter: "",
      },
      activeName: "BossApp",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style>
.hi {
  font-size: 4.5em;
  font-weight: 500;
  margin-bottom: 0;
  margin-top: 0;
  text-align: center;
  font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
}

.sayHi {
  font-weight: 500;
  font-size: 2.2em;
  text-align: center;
  font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
}

.simpleIntroduce {
  text-align: center;
  font-size: calc((1.1 - 1) * 1.2vw + 1rem);
  color: #838486;
  letter-spacing: 0.01em;
}

.show-header {
  font-family: adobe-caslon-pro;
}

.myPhoto {
  width: 300px;
  height: 400px;
  text-align: center;
  margin: 0px auto;
  display: block;
  padding: 25px 0px;
}

.myJob {
  text-align: center;
  font-weight: 400;
  font-family: adobe-caslon-pro;
  letter-spacing: 0.2em;
  font-size: calc((1.7 - 1) * 1.2vw + 1rem);
}

.ability-header {
  margin: 0 auto;
  font-weight: 400;
  font-family: adobe-caslon-pro;
  font-style: italic;
  letter-spacing: 2px;
  text-transform: none;
}

.ability-item {
  font-family: "Helvetica Neue", Arial, sans-serif;
  padding: 0 17px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.6;
  text-align: center;
  white-space: pre-wrap;
}

.ability-row {
  margin: 100px 0;
}

.job .infoContent {
  text-indent: 2em;
}

.jobTitle {
  text-align: center;
  margin-bottom: 100px;
}

.devProjectTitle {
  text-align: center;
}

.projectContain {
  height: 500px;
}

.projectContain .info-text {
  font-size: 14px;
  color: #61687c;
  padding: 7px 0;
}


.projectContain .info-text .projectTitle {
  float: left;
  margin: 0;
  font-size: 15px;
}

.projectContain .info-text .range {
  float: left;
  overflow: hidden;
  color: #9fa3b0;
  font-size: 12px;
  margin-left: 20px;
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

.projectContain .text-type {
  font-weight: 700;
  color: #61687c;
  padding-right: 7px;
  font-size: 14px;
}

.projectContain .info-text:hover {
  background: #fff1e6;
}

.csdn {
  width: 28px;
  height: 28px;
  cursor: pointer;
  border-radius: 50%;
}

.grid-content {
  /*没有这个样式，没有内容的el-col不会占据空间*/
  border-radius: 4px;
  min-height: 36px;
}

div .companyLogo {
  float: left;
  margin-top: 11px;
  margin-right: 11px;
  border-radius: 50%;
}

div .company {
  float: left;
}

.mySite {
  text-align: right;
}

.projectContain .info-text.titleContain {
  height: 50px;
  line-height: 50px;
  background: none;
}

.life-zone {
  margin: 100px 0;
}

.life-zone .title {
  text-align: center;
}

.photo-zone {
  padding-left: 18%;
  padding-right: 18%;
}

.myjob-zone {
  margin: 50px 0;
}

.job .el-card__body {
  padding-top: 6px !important;
}

</style>
