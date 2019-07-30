import React, { Component } from "react";
import "./App.css";
import { Layout, Row, Col, Typography, message, Card } from "antd";
import fetchService from "./fetchService";
import { connect } from "react-redux";
import { rates } from "./actions/rates";
import { CHistoricalLineChart } from "./containers/CHistoricalLineChart";
import { CSelectCurrency } from "./containers/CSelectCurrency";
const { Header, Content } = Layout;
const { Title } = Typography;

class AppView extends Component {
  async componentDidMount() {
    await this.getLatest();
  }

  async getLatest() {
    const { fetchLatest, addHistorical } = this.props;
    try {
      await fetchService.getLatestStatic(fetchLatest, addHistorical);
    } catch (error) {
      message.error(error);
    }
  }

  render() {
    return (
      <Layout className="layout">
        <Header>
          <Typography>
            <Title style={{ color: "white" }}>Fx Rates</Title>
          </Typography>
        </Header>
        <Content style={{ height: 800, padding: "0 50px" }}>
          <Row>
            <Col span={20} offset={2}>
              <Card title="Default size card">
                <CSelectCurrency />
                <CHistoricalLineChart />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    historicalRates: state.historicalRates,
    today: state.today
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLatest: latest => dispatch(rates.fetchLatest(latest)),
    addHistorical: historical => dispatch(rates.addHistorical(historical))
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppView);

export default App;
