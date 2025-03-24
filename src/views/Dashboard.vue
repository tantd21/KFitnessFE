<template>
  <div class="container mt-4">
   

    <div class="row">
      <!-- Biểu đồ doanh thu -->
      <div class="col-md-6">
        <div class="card p-3 chart-container">
          <h5 class="text-center">Doanh Thu Tháng</h5>
          <canvas ref="revenueChart"></canvas>
        </div>
      </div>

      <!-- Biểu đồ hiệu suất -->
      <div class="col-md-6">
        <div class="card p-3 chart-container">
          <h5 class="text-center">Hiệu Suất Hoạt Động</h5>
          <canvas ref="performanceChart"></canvas>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <!-- Biểu đồ tròn tỷ lệ thành viên -->
      <div class="col-md-6">
        <div class="card p-3 chart-container">
          <h5 class="text-center">Tỷ Lệ Loại Membership</h5>
          <canvas ref="membershipChart"></canvas>
        </div>
      </div>

      <!-- Biểu đồ thanh số lượng người đăng ký -->
      <div class="col-md-6">
        <div class="card p-3 chart-container">
          <h5 class="text-center">Số Lượng Người Đăng Ký</h5>
          <canvas ref="signupChart"></canvas>
        </div>
      </div>
    </div>

    <!-- Bảng thống kê thành viên -->
    <div class="card p-3 mt-4">
      <h5>Thống kê thành viên</h5>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Loại Membership</th>
            <th>Ngày tham gia</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(member, index) in members" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ member.name }}</td>
            <td>{{ member.membership }}</td>
            <td>{{ member.joined }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Chart from "chart.js/auto";

export default {
  name: "Dashboard",
  setup() {
    const revenueChart = ref(null);
    const performanceChart = ref(null);
    const membershipChart = ref(null);
    const signupChart = ref(null);

    let revenueChartInstance = null;
    let performanceChartInstance = null;
    let membershipChartInstance = null;
    let signupChartInstance = null;

    const revenueData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Doanh thu ($)",
          data: [5000, 7000, 8000, 12000, 15000, 18000],
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 2,
        },
      ],
    };

    const performanceData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Hiệu suất (%)",
          data: [80, 85, 75, 90, 95, 88],
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 2,
        },
      ],
    };

    const membershipData = {
      labels: ["Gold", "Silver", "Platinum"],
      datasets: [
        {
          label: "Số lượng",
          data: [15, 20, 10], // Dữ liệu giả lập
          backgroundColor: ["#FFD700", "#C0C0C0", "#E5E4E2"],
        },
      ],
    };

    const signupData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Số người đăng ký",
          data: [30, 45, 50, 60, 75, 90],
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
        },
      ],
    };

    const members = ref([
      { name: "Nguyễn Văn A", membership: "Gold", joined: "2024-01-15" },
      { name: "Trần Thị B", membership: "Silver", joined: "2024-02-10" },
      { name: "Lê Văn C", membership: "Platinum", joined: "2024-03-05" },
    ]);

    const createCharts = () => {
      if (revenueChartInstance) revenueChartInstance.destroy();
      if (performanceChartInstance) performanceChartInstance.destroy();
      if (membershipChartInstance) membershipChartInstance.destroy();
      if (signupChartInstance) signupChartInstance.destroy();

      revenueChartInstance = new Chart(revenueChart.value, {
        type: "line",
        data: revenueData,
        options: { responsive: true, maintainAspectRatio: false },
      });

      performanceChartInstance = new Chart(performanceChart.value, {
        type: "bar",
        data: performanceData,
        options: { responsive: true, maintainAspectRatio: false },
      });

      membershipChartInstance = new Chart(membershipChart.value, {
        type: "doughnut",
        data: membershipData,
        options: { responsive: true, maintainAspectRatio: false },
      });

      signupChartInstance = new Chart(signupChart.value, {
        type: "bar",
        data: signupData,
        options: { responsive: true, maintainAspectRatio: false },
      });
    };

    onMounted(createCharts);
    onBeforeUnmount(() => {
      if (revenueChartInstance) revenueChartInstance.destroy();
      if (performanceChartInstance) performanceChartInstance.destroy();
      if (membershipChartInstance) membershipChartInstance.destroy();
      if (signupChartInstance) signupChartInstance.destroy();
    });

    return { revenueChart, performanceChart, membershipChart, signupChart, members };
  },
};
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 300px; /* Giới hạn chiều cao để tránh lỗi kéo dài */
}

.card {
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
