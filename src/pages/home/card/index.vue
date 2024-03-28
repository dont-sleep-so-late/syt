<template>
    <el-card style="max-width: 480px" shadow="hover" @click="goDetail">
        <div class="content">
            <div class="left">
                <div class="hospital_name">
                    <h2>{{ hospitalInfo.hosname }}</h2>
                </div>
                <div class="tip">
                    <div class="level">
                        <svg t="1710058402393" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="7149" width="16" height="16">
                            <path
                                d="M511 724.7c-79.5 0-154.3-31-210.5-87.2-56.2-56.2-87.2-131-87.2-210.5s31-154.3 87.2-210.5 131-87.2 210.5-87.2 154.3 31 210.5 87.2 87.2 131 87.2 210.5-31 154.3-87.2 210.5c-56.2 56.3-131 87.2-210.5 87.2z m0-545.4c-136.6 0-247.7 111.1-247.7 247.7S374.4 674.7 511 674.7 758.7 563.6 758.7 427 647.6 179.3 511 179.3z"
                                p-id="7150" fill="#8a8a8a"></path>
                            <path
                                d="M243 895.5l59.4-266 48.8 10.9L310.7 822l194.8-60.8 206.4 61.1L663 632.5l48.4-12.5 71 275.3-276.5-81.8zM512 268.8l46.9 94.9L663.7 379l-75.9 73.9 17.9 104.4L512 508l-93.7 49.3 17.9-104.4-75.9-73.9 104.8-15.3z"
                                p-id="7151" fill="#8a8a8a"></path>
                        </svg>
                        {{ hospitalInfo.param.hostypeString }}
                    </div>
                    <div class="time">
                        <svg t="1710058512228" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="8493" width="16" height="16">
                            <path
                                d="M917.333333 512c0-223.850667-181.482667-405.333333-405.333333-405.333333S106.666667 288.149333 106.666667 512s181.482667 405.333333 405.333333 405.333333 405.333333-181.482667 405.333333-405.333333z m-425.984-5.333333a21.333333 21.333333 0 0 0 6.101334 20.928l124.8 116.394666a21.333333 21.333333 0 0 0 29.12-31.189333l-118.08-110.122667L533.333333 501.333333v-170.666666a21.333333 21.333333 0 0 0-42.666666 0v170.666666c0 1.834667 0.213333 3.626667 0.682666 5.333334zM149.333333 512c0-200.298667 162.368-362.666667 362.666667-362.666667s362.666667 162.368 362.666667 362.666667-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512z m612.501334 305.002667a21.333333 21.333333 0 1 0-30.336 29.994666l74.304 75.157334a21.333333 21.333333 0 1 0 30.336-29.994667l-74.304-75.157333z m-480.362667 29.994666a21.333333 21.333333 0 0 0-30.336-29.994666L176.832 892.16a21.333333 21.333333 0 1 0 30.336 29.994667l74.304-75.157334zM778.496 128A117.525333 117.525333 0 0 1 896 245.333333a21.333333 21.333333 0 0 0 42.666667 0C938.666667 157.077333 866.901333 85.333333 778.496 85.333333h-20.992a21.333333 21.333333 0 1 0 0 42.666667h20.992zM245.504 85.333333C157.098667 85.333333 85.333333 157.077333 85.333333 245.333333a21.333333 21.333333 0 0 0 42.666667 0C128 180.629333 180.672 128 245.504 128h20.992a21.333333 21.333333 0 1 0 0-42.666667h-20.992z"
                                fill="#8a8a8a" p-id="8494"></path>
                        </svg>
                        <span>每天{{ hospitalInfo.bookingRule?.releaseTime }}放号</span>
                    </div>
                </div>
            </div>
            <div class="right">
                <img :src="`data:image/jpeg;base64,${hospitalInfo.logoData}`" alt="">
            </div>
        </div>
    </el-card>
</template>

<script lang='ts' setup>
import { useRouter } from 'vue-router';

var props = defineProps(['hospitalInfo'])

const router = useRouter()

const goDetail = () => {
    router.push({
        path: '/hospital/register',
        query: {
            hosname: props.hospitalInfo.hosname,
            hoscode: props.hospitalInfo.hoscode,
        }
    })
}


</script>

<style lang='scss' scoped>
.content {
    display: flex;
    justify-content: space-between;



    .left {
        width: 60%;

        .hospital_name {
            h2 {
                font-weight: 400;
            }
        }

        .tip {
            color: #7f7f7f7f;
            margin-top: 20px;
            display: flex;
            justify-content: space-between;

            .level,
            .time {
                display: flex;
                align-items: center;
            }
        }
    }

    .right {
        display: flex;
        align-items: center;

        img {
            width: 50px;
            height: 50px;
        }
    }

    &:hover {
        cursor: pointer;
    }
}
</style>