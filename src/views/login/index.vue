<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const router = useRouter();

const rules = ref({
  phone: [{ required: true, message: "请输入手机号" }],
  validationCode: [{ required: true, message: "请输入验证码" }],
});

const form = ref();
const formValue = ref({
  sectionValue: "1",
  phone: "",
  validationCode: "",
});

// 验证码区域文字说明
const spanRef = ref();
const isSendValidationCode = ref("发送验证码");
const showCheck = ref(false);
// 发送验证码
async function sendValidationCode(phone: any) {
  // 用户是否已同意协议，未同意显示提示并不再执行
  if (!checkAgree.value) {
    ElMessage.error("请先同意用户协议和隐私条款");
    return;
  }
  // 若显示的发送验证码区域文字 不是 '发送验证码'，就直接返回不再执行
  if (!isSendValidationCode.value.endsWith("发送验证码")) return;
  // 表单验证
  await form.value.validateField("phone");
  // 重新发送逻辑
  isSendValidationCode.value = "60秒后重新发送";
  spanRef.value.style = "color: gray;"; // 颜色变灰
  const countDown = ref(60); // 倒计时
  const temp = setInterval(() => {
    countDown.value--;
    isSendValidationCode.value = countDown.value + "秒后重新发送";
    if (!countDown.value) {
      clearInterval(temp);
      spanRef.value.style = "color: #1764FF;"; // 颜色变蓝
      isSendValidationCode.value = "重新发送验证码";
      countDown.value = 60;
    }
  }, 1000);
}

const checkAgree = ref(false);
const agree = () => {
  checkAgree.value = true;
  showCheck.value = false;
};
const login = () => {
  if (!checkAgree.value) {
    ElMessage.error("请先同意用户协议和隐私条款");
    return;
  }
  form.value.validate((valid: any, fields: any) => {
    if (valid) {
      router.push("/");
    } else {
      console.log("error submit!", fields);
    }
  });
  console.log(formValue.value);
};
</script>

<template>
  <div class="login-container">
    <div class="login-container-bg">
      <div class="login-container-bg-title">
        <img
          class="login-container-bg-icon"
          src="@/assets/svg/icon.svg"
          alt=""
        />
        <span class="login-container-bg-title-text">科技情报雷达</span>
      </div>
      <div class="login-container-bg-desc">
        <div class="login-container-bg-desc-text">
          “科技情报雷达为用户提供全面的技术洞察，通过技术云图、图谱展示、雷达图和评分图等功能模块，结合详细的数据展示与可视化图表，帮助用户掌握前沿科技趋势。”
        </div>
        <img
          class="login-container-bg-vector"
          src="@/assets/svg/vector.svg"
          alt=""
        />
      </div>
    </div>
    <div class="login-container-content">
      <div class="login-container-content-form">
        <div class="login-title">手机登录</div>
        <el-form :model="formValue" :rules="rules" ref="form">
          <el-form-item>
            <el-input
              v-model="formValue.phone"
              style="max-width: 600px"
              placeholder="请输入手机号"
              class="phone-input"
            >
              <template #prepend>
                <el-select
                  v-model="formValue.sectionValue"
                  style="width: 115px"
                >
                  <el-option label="+86" value="1" />
                  <el-option label="+1" value="2" />
                  <el-option label="+852" value="3" />
                </el-select>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model.number="formValue.validationCode"
              placeholder="请输入验证码"
              class="validation-code-input"
            >
              <template #suffix>
                <span class="suffix-span">
                  <span>|</span>
                  <span
                    ref="spanRef"
                    @click="sendValidationCode(formValue.phone)"
                    class="send-validation-code"
                  >
                    {{ isSendValidationCode }}
                  </span>
                </span>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <div class="user-agreement-container">
              <div
                class="user-agreement-checkbox"
                @click="checkAgree = !checkAgree"
              >
                <template v-if="checkAgree">
                  <img src="@/assets/svg/selected.svg" alt="" />
                </template>
                <template v-else>
                  <img src="@/assets/svg/unselected.svg" alt="" />
                </template>
              </div>
              <span>我已阅读并同意</span>
              <span class="user-agreement" @click="showCheck = true"
                >用户协议和隐私条款</span
              >
            </div>
          </el-form-item>
          <el-form-item>
            <div class="login-btn" @click="login">
              <span>登录</span>
              <img
                class="arrow-right"
                src="@/assets/svg/arrow-right.svg"
                alt=""
              />
            </div>
          </el-form-item>
        </el-form>
      </div>
      <div class="privacy-terms" v-if="showCheck">
        <!-- 隐私条款 -->
        <div class="privacy-terms-card">
          <div class="privacy-terms-card-content">
            <div class="privacy-terms-card-title">隐私条款</div>
            <ol>
              <li>
                适用范围
                本隐私条款适用于使用“科技情报雷达”软件（以下简称“本软件”）的所有用户。本软件尊重并保护所有用户的个人隐私权，并将按照本隐私条款的规定使用和披露您的个人信息。
              </li>
              <li>
                信息收集与使用
                本软件可能会收集您的个人信息，包括但不限于您的姓名、联系方式、使用习惯等，以便为您提供更准确、个性化的服务。我们承诺不会将这些信息用于本软件服务之外的任何其他目的。
              </li>
              <li>
                信息安全
                本软件将采取行业标准的安全措施来保护您的个人信息不被未经授权的访问和使用。我们使用加密技术、防火墙以及其他安全机制来保护您的信息。
              </li>
              <li>
                信息披露
                除非法律要求或您的明确同意，本软件不会向任何第三方披露您的个人信息。
              </li>
              <li>
                隐私政策的更改
                我们可能会根据需要更新本隐私政策。任何重大变更将通过本软件通知您，以便您及时了解我们如何收集、使用您的个人信息。
              </li>
            </ol>
            <div class="privacy-terms-card-title">用户协议</div>
            <ol>
              <li>
                服务条款
                用户在使用本软件时，应遵守本协议的所有条款和条件。本软件提供的所有服务均受本协议约束。
              </li>
              <li>
                账号使用
                用户应自行负责其账号的安全，不得将账号信息泄露给任何第三方。用户应对其账号下的所有活动负责。
              </li>
              <li>
                内容所有权
                本软件内的所有内容，包括但不限于文本、图像、音频、视频等，均受版权法保护。未经本软件明确书面许可，用户不得复制、修改、传播或以其他方式使用这些内容。
              </li>
              <li>
                用户行为规范
                用户在使用本软件时，应遵守所有适用的法律法规，不得从事任何违法或不道德的行为。
              </li>
              <li>
                免责声明
                本软件不保证服务不会中断，对因技术故障、系统维护等原因导致的服务中断或数据丢失不承担责任。
              </li>
              <li>
                协议的修改与终止
                本软件保留随时修改本协议的权利。如果用户不接受修改后的协议，应立即停止使用本软件。本软件也有权在任何时候终止服务。
                请注意，以上内容仅供参考，具体条款应根据实际情况和当地法律法规进行调整。在实施前，建议咨询法律专业人士进行审核。
              </li>
            </ol>
          </div>
        </div>
        <div class="privacy-terms-btn-container">
          <div class="privacy-terms-btn" @click="agree">同意</div>
          <div class="privacy-terms-btn return-btn" @click="showCheck = false">
            返回
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;

  .login-container-bg {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 40%;
    height: 100%;
    background: url("@/assets/img/bg.png") no-repeat center center;
    background-size: 100% 100%;

    .login-container-bg-title {
      position: absolute;
      top: 56px;
      left: 60px;
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 20px;
      font-weight: 600;

      .login-container-bg-icon {
        width: 50px;
        height: 50px;
      }
      .login-container-bg-title-text {
        margin-left: 20px;
      }
    }

    .login-container-bg-desc {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 394px;
      font-size: 20px;
      line-height: 28px;
      color: #fff;
      .login-container-bg-desc-text {
        margin-right: 34px;
      }
      .login-container-bg-vector {
        align-self: flex-end;
      }
    }
  }

  .login-container-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 60%;
    height: 100%;
    background: url("@/assets/img/bg-frame.png") no-repeat right bottom;
    background-size: auto 70%;

    .login-container-content-form {
      width: 408px;
    }

    .el-form-item {
      margin-bottom: 32px;
    }

    .el-input {
      height: 48px;
      font-size: 16px;
    }

    .login-title {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 48px;
    }

    .phone-input {
      :deep(.el-select__wrapper) {
        font-size: 16px;
        height: 48px;
        padding-left: 20px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
    }

    .validation-code-input {
      .send-validation-code {
        cursor: pointer;
        margin-left: 16px;
      }
    }

    .user-agreement-container {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-family: Inter;

      .user-agreement-checkbox {
        display: flex;
        width: 18px;
        margin-right: 20px;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .user-agreement {
        color: #1764ff;
        text-decoration: underline;
        cursor: pointer;
      }
    }

    .login-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 408px;
      height: 56px;
      border-radius: 8px;
      background: #273075;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      cursor: pointer;

      .arrow-right {
        width: 16px;
        height: 16px;
        margin-left: 8px;
      }

      &:hover {
        background: #4955b3;
      }
    }

    .privacy-terms {
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      background: #fff;
      .privacy-terms-card {
        flex: 1;
        height: 0;
        margin: 21px 61px 24px;
        padding: 38px 40px 38px 56px;
        font-size: 24px;
        line-height: 28px;
        box-shadow: 0px 4px 4px 2px #00000040;
        border-radius: 16px;
        overflow: hidden;
        .privacy-terms-card-content {
          width: 100%;
          height: 100%;
          overflow-y: scroll;

          &::-webkit-scrollbar {
            display: none;
          }

          .privacy-terms-card-title {
            margin-bottom: 40px;
          }

          li + li {
            margin-top: 10px;
          }
          ol + .privacy-terms-card-title {
            margin-top: 40px;
          }
        }
      }
      .privacy-terms-btn-container {
        flex: none;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;

        .privacy-terms-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 204px;
          height: 64px;
          font-size: 24px;
          font-weight: 600;
          color: #fff;
          background: #0f1c51;
          border-radius: 8px;
          cursor: pointer;

          &:hover {
            background: #4955b3;
          }
        }

        .return-btn {
          color: #0f1c51;
          background: #c6c6c6;

          &:hover {
            background: #e6e6e6;
          }
        }

        .privacy-terms-btn + .privacy-terms-btn {
          margin-left: 30px;
        }
      }
    }
  }
}
:deep(.el-input__wrapper) {
  border-radius: 8px;
}
:deep(.el-input-group__prepend) {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
</style>
