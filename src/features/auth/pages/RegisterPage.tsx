import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card } from '../../../shared/ui/Card';
import { RegisterForm } from '../components/RegisterForm';

export const RegisterPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Register | StriveWheels</title>
        <meta
          name="description"
          content="Create a new StriveWheels account to access features, forms, and data dashboards."
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
            <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">Create Account</h1>
            <p className="text-slate-400 text-sm">Join StriveWheels and unlock interactive data tracking</p>
          </div>

          <Card className="border-slate-800 bg-slate-900/60 p-8 shadow-xl">
            <RegisterForm />
          </Card>
        </motion.div>
      </div>
    </>
  );
};
