<template>
  <div class="hello">
    <el-container>
      <el-header>{{version}}</el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1" @click="raiseSalary">加薪</el-menu-item>
                    <el-menu-item index="1-2" @click="changeVersion">换代</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3" @click="remoteRequest">远程请求</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="序号" width="120"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="age" label="年龄" width="120"></el-table-column>
            <el-table-column prop="salary" label="薪水" width="120"></el-table-column>
            <el-table-column prop="date" label="日期" width="150"></el-table-column>
            <el-table-column prop="detail" :formatter="checkRole" label="详情" width="200"></el-table-column>
            <el-table-column fixed="right" label="操作">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button @click="handleEdit(scope.row)" type="text" size="small">搞事情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-form :model="dialogForm">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="dialogForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="dialogForm.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="详情" :label-width="formLabelWidth">
          <el-select v-model="dialogForm.detail" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "MyWorld",
  computed: {},
  mounted() {
    this.tableData = this.tableData1;
  },
  methods: {
    handleClick(row) {
      this.dialogVisible = true;
      this.dialogForm = row;
    },
    handleEdit(row) {
      row.age++;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    raiseSalary() {
      // 薪水加倍
      this.tableData.forEach((data) => {
        data.salary *= 2;
      });
    },
    changeVersion() {
      // 换代
      if (this.version === "黄金太阳1代") {
        this.tableData = this.tableData2;
        this.version = "黄金太阳2代";
      } else {
        this.tableData = this.tableData1;
        this.version = "黄金太阳1代";
      }
    },
    checkRole(row) {
      if (row.detail == "地系") {
        return row.detail + "（主角）";
      } else {
        return row.detail;
      }
    },
    remoteRequest() {
      const api = "http://localhost:8080/getToken";
      this.axios.get(api).then((res) => {
        const token = res.data;
        localStorage.setItem("token", token);
      });
    },
  },
  data() {
    return {
      dialogVisible: false,
      version: "黄金太阳1代",
      dialogForm: {
        name: "",
        age: "",
        detail: "",
      },
      formLabelWidth: "120px",
      tableData: [],
      tableData1: [
        {
          id: 1,
          name: "罗宾",
          age: 28,
          salary: 1000,
          date: "2016-05-02",
          detail: "地系",
        },
        {
          id: 2,
          name: "杰拉德",
          age: 28,
          salary: 9000,
          date: "2016-05-02",
          detail: "火系",
        },
        {
          id: 3,
          name: "米莉亚",
          age: 21,
          salary: 800,
          date: "2016-05-02",
          detail: "水系",
        },
        {
          id: 4,
          name: "伊万",
          age: 19,
          salary: 500,
          date: "2016-05-02",
          detail: "风系",
        },
      ],
      tableData2: [
        {
          id: 5,
          name: "加西亚",
          age: 29,
          salary: 1100,
          date: "2016-05-02",
          detail: "地系",
        },
        {
          id: 6,
          name: "加斯敏",
          age: 26,
          salary: 900,
          date: "2016-05-02",
          detail: "火系",
        },
        {
          id: 7,
          name: "皮卡德",
          age: 500,
          salary: 900,
          date: "2016-05-02",
          detail: "水系",
        },
        {
          id: 8,
          name: "西芭",
          age: 19,
          salary: 500,
          date: "2016-05-02",
          detail: "风系",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-table__header tr,
.el-table__header th {
  padding: 0;
  height: 60px;
}
.el-table__body tr,
.el-table__body td {
  padding: 0;
  height: 40px;
}
</style>
