import React, { Component } from 'react';
import './App.css';
import { Layout, Row, Col, Typography, message, Card } from 'antd';
import fetchService from './fetchService';
import { connect } from 'react-redux';
import { rates } from './actions/rates';
import { CHistoricalLineChart } from './containers/CHistoricalLineChart';
import { CSelectCurrency } from './containers/CSelectCurrency';
const { Header, Content } = Layout;
const { Title } = Typography;


class AppView extends Component {

  componentDidMount(){
    this.getLatest()
  }

  async getLatest() {
    try {
      const latest = await fetchService.getLatestStatic();
      this.props.fetchLatest(latest);
    } catch (error) {
      message.error(error)
    }
  }

  render() {
    const { historicalRates } = this.props;
    return (
      <Layout className="layout">
        <Header>
          <Typography>
            <Title style={{color: 'white' }}>Fx Rates</Title>
          </Typography>
        </Header>
        <Content style={{ height: 800, padding: '0 50px' }}>

          <Row>
            <Col span={20} offset={2}>
              <Card title="Default size card">
                <CSelectCurrency/>
                <CHistoricalLineChart/>
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
    today: state.today,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchLatest: (latest) => dispatch(rates.fetchLatest(latest))
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppView)

export default App;
