import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Activity, Layers, Plus, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card } from '../../../shared/ui/Card';
import { Button } from '../../../shared/ui/Button';
import { Modal } from '../../../shared/ui/Modal';
import { useAuthStore } from '../../auth/store/useAuthStore';

export const DashboardPage: React.FC = () => {
  const { user, isAuthenticated } = useAuthStore();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } },
  };

  const stats = [
    {
      title: 'Total Telemetry',
      value: '458,230',
      change: '+12.5%',
      isPositive: true,
      icon: Activity,
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      title: 'Active Nodes',
      value: '1,482',
      change: '+4.8%',
      isPositive: true,
      icon: Users,
      color: 'text-brand-500 bg-brand-500/10 border-brand-500/20',
    },
    {
      title: 'System Load',
      value: '42.8%',
      change: '-2.4%',
      isPositive: false,
      icon: Layers,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      title: 'Efficiency Index',
      value: '98.2%',
      change: '+0.6%',
      isPositive: true,
      icon: TrendingUp,
      color: 'text-violet-500 bg-violet-500/10 border-violet-500/20',
    },
  ];

  const activities = [
    { id: 1, text: 'Node US-EAST-1 joined the cluster', time: '2 mins ago', status: 'success' },
    {
      id: 2,
      text: 'High resource usage warning on Node EU-WEST-2',
      time: '12 mins ago',
      status: 'warning',
    },
    { id: 3, text: 'Backup database process completed successfully', time: '1 hr ago', status: 'success' },
    { id: 4, text: 'SSL certificate renewed automatically', time: '3 hrs ago', status: 'neutral' },
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard | StriveWheels</title>
        <meta
          name="description"
          content="StriveWheels analytics dashboard displaying real-time telemetry metrics and system nodes."
        />
      </Helmet>

      <div className="space-y-8">
        {/* Header Greeting */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              {isAuthenticated ? `Welcome back, ${user?.name}` : 'Welcome Guest'}
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Here is your workspace telemetry and live node clusters.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={() => setIsModalOpen(true)} className="flex items-center gap-1.5">
              <Plus className="h-4 w-4" /> Add Widget
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card hoverEffect className="relative overflow-hidden flex flex-col justify-between h-36">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  </div>
                  <div className={`p-2 rounded-lg border ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm mt-4">
                  {stat.isPositive ? (
                    <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-rose-500" />
                  )}
                  <span
                    className={
                      stat.isPositive ? 'text-emerald-500 font-semibold' : 'text-rose-500 font-semibold'
                    }
                  >
                    {stat.change}
                  </span>
                  <span className="text-slate-500">vs last month</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Chart & Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Telemetry Chart */}
          <Card className="lg:col-span-2 flex flex-col justify-between">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-slate-200">Telemetry History</h3>
              <p className="text-slate-400 text-xs mt-0.5">Real-time network usage and latency indices</p>
            </div>

            {/* SVG Graph */}
            <div className="h-64 w-full flex items-end">
              <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Grid Lines */}
                <line x1="0" y1="50" x2="500" y2="50" stroke="#1e293b" strokeDasharray="5,5" />
                <line x1="0" y1="100" x2="500" y2="100" stroke="#1e293b" strokeDasharray="5,5" />
                <line x1="0" y1="150" x2="500" y2="150" stroke="#1e293b" strokeDasharray="5,5" />

                {/* Graph Path */}
                <path
                  d="M0,160 Q60,110 120,130 T240,70 T360,120 T480,40 L500,40 L500,200 L0,200 Z"
                  fill="url(#chartGradient)"
                />
                <path
                  d="M0,160 Q60,110 120,130 T240,70 T360,120 T480,40 L500,40"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Data Points */}
                <circle cx="120" cy="130" r="5" fill="#6366f1" stroke="#0f172a" strokeWidth="2" />
                <circle cx="240" cy="70" r="5" fill="#6366f1" stroke="#0f172a" strokeWidth="2" />
                <circle cx="360" cy="120" r="5" fill="#6366f1" stroke="#0f172a" strokeWidth="2" />
                <circle cx="480" cy="40" r="5" fill="#6366f1" stroke="#0f172a" strokeWidth="2" />
              </svg>
            </div>

            <div className="flex justify-between items-center text-xs text-slate-500 mt-4 border-t border-slate-800 pt-3">
              <span>08:00 AM</span>
              <span>12:00 PM</span>
              <span>04:00 PM</span>
              <span>08:00 PM</span>
            </div>
          </Card>

          {/* Activity Log */}
          <Card className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Recent Activities</h3>
              <div className="space-y-4">
                {activities.map((act) => (
                  <div key={act.id} className="flex items-start gap-3 text-sm" data-testid="activity-item">
                    <span
                      className={`h-2.5 w-2.5 rounded-full mt-1.5 shrink-0 ${
                        act.status === 'success'
                          ? 'bg-emerald-500'
                          : act.status === 'warning'
                          ? 'bg-amber-500'
                          : 'bg-slate-500'
                      }`}
                    />
                    <div className="flex-grow">
                      <p className="text-slate-300 font-medium">{act.text}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{act.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-6">
              View Audit Logs
            </Button>
          </Card>
        </div>
      </div>

      {/* Modal Widget */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Custom Widget">
        <div className="space-y-4">
          <p className="text-slate-300 text-sm">
            Customize your dashboard view by appending new analytics monitors or telemetry pipelines.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-3 rounded-lg border border-slate-800 bg-slate-950 text-left hover:border-brand-500 transition-colors">
              <p className="text-sm font-semibold text-slate-200">Disk I/O</p>
              <p className="text-xs text-slate-500 mt-0.5">Read/Write operations</p>
            </button>
            <button className="p-3 rounded-lg border border-slate-800 bg-slate-950 text-left hover:border-brand-500 transition-colors">
              <p className="text-sm font-semibold text-slate-200">Error Rate</p>
              <p className="text-xs text-slate-500 mt-0.5">Global HTTP warnings</p>
            </button>
          </div>
          <div className="flex justify-end gap-3 border-t border-slate-800 pt-4 mt-6">
            <Button variant="ghost" size="sm" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button size="sm" onClick={() => setIsModalOpen(false)}>
              Save Configurations
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
