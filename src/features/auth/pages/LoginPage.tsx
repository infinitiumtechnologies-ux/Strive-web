import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card } from '../../../shared/ui/Card';
import { LoginForm } from '../components/LoginForm';

export const LoginPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Login | StriveWheels</title>
        <meta
          name="description"
          content="Sign in to your StriveWheels account to manage your profile and dashboard."
        />
      </Helmet>

      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-6">
            <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">Welcome Back</h1>
            <p className="text-slate-400 text-sm">Sign in to continue exploring your dashboard</p>
          </div>

          <Card className="border-slate-800 bg-slate-900/60 p-8 shadow-xl">
            <LoginForm />
          </Card>
        </motion.div>
      </div>
    </>
  );
};
