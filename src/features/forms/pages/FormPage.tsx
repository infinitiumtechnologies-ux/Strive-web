import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Settings, Upload, Check } from 'lucide-react';
import { Card } from '../../../shared/ui/Card';
import { Input } from '../../../shared/ui/Input';
import { Button } from '../../../shared/ui/Button';

const profileSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username cannot exceed 20 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Only letters, numbers, and underscores are allowed'),
  fullName: z.string().min(2, 'Full Name must be at least 2 characters'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  website: z.string().url('Invalid website URL').or(z.literal('')),
  bio: z.string().max(160, 'Bio cannot exceed 160 characters').optional(),
  theme: z.enum(['light', 'dark', 'system']),
  notifications: z.boolean(),
  weeklyDigest: z.boolean(),
});

type ProfileFields = z.infer<typeof profileSchema>;

export const FormPage: React.FC = () => {
  const [avatar, setAvatar] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [successData, setSuccessData] = React.useState<ProfileFields | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProfileFields>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: 'johndoe',
      fullName: 'John Doe',
      email: 'john@example.com',
      website: 'https://johndoe.dev',
      bio: 'Front-end architect and React enthusiast.',
      theme: 'dark',
      notifications: true,
      weeklyDigest: false,
    },
  });

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: ProfileFields) => {
    setIsLoading(true);
    try {
      // Simulate API submit delay
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSuccessData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Profile Settings | StriveWheels</title>
        <meta
          name="description"
          content="Manage your StriveWheels user account, avatar, notifications, and visual styling theme settings."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Profile Settings</h1>
          <p className="text-slate-400 text-sm mt-1">
            Configure your personal configurations, social links, notifications, and avatar profiles.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
          <Card className="p-8 space-y-8">
            {/* Avatar Upload */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-800">
              <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-brand-500/30 bg-slate-800 flex items-center justify-center shrink-0">
                {avatar ? (
                  <img src={avatar} alt="Avatar Preview" className="h-full w-full object-cover" />
                ) : (
                  <User className="h-10 w-10 text-slate-500" />
                )}
              </div>
              <div className="flex flex-col items-center sm:items-start gap-2">
                <p className="text-sm font-semibold text-slate-200">Profile Picture</p>
                <p className="text-xs text-slate-500 mb-2">JPG, PNG or GIF. Max size 2MB.</p>
                <div className="flex gap-3">
                  <label className="relative cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      className="hidden"
                    />
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-200 transition-colors">
                      <Upload className="h-3.5 w-3.5" />
                      Upload Avatar
                    </span>
                  </label>
                  {avatar && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setAvatar(null)}
                      className="text-xs text-red-500 h-auto py-1.5 px-2 hover:bg-red-500/10 hover:text-red-400"
                    >
                      Remove
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Profile Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Username" error={errors.username?.message} {...register('username')} />

              <Input label="Full Name" error={errors.fullName?.message} {...register('fullName')} />

              <Input label="Email Address" type="email" error={errors.email?.message} {...register('email')} />

              <Input
                label="Website URL"
                placeholder="https://example.com"
                error={errors.website?.message}
                {...register('website')}
              />
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-300">Biography</label>
              <textarea
                placeholder="Write a short paragraph about yourself..."
                rows={4}
                className={`flex w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:border-transparent ${
                  errors.bio?.message ? 'border-red-500 focus-visible:ring-red-500' : ''
                }`}
                {...register('bio')}
              />
              {errors.bio?.message && (
                <span className="text-xs text-red-500 font-medium" role="alert">
                  {errors.bio.message}
                </span>
              )}
            </div>

            {/* Theme Selector */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h3 className="text-sm font-semibold text-slate-200">Application Preferences</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(['light', 'dark', 'system'] as const).map((t) => (
                  <label
                    key={t}
                    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      watch('theme') === t
                        ? 'bg-brand-500/10 border-brand-500/40 text-brand-400'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <input type="radio" value={t} className="sr-only" {...register('theme')} />
                    <Settings className="h-4 w-4" />
                    <span className="text-sm font-medium capitalize">{t} Mode</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Notification Checkboxes */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h3 className="text-sm font-semibold text-slate-200">Email Notifications</h3>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-800 bg-slate-900 text-brand-600 focus:ring-brand-500 focus:ring-offset-slate-950 mt-1"
                    {...register('notifications')}
                  />
                  <div>
                    <p className="text-sm font-medium text-slate-200">System Alerts</p>
                    <p className="text-xs text-slate-500">
                      Receive instant updates regarding node failure warnings.
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-800 bg-slate-900 text-brand-600 focus:ring-brand-500 focus:ring-offset-slate-950 mt-1"
                    {...register('weeklyDigest')}
                  />
                  <div>
                    <p className="text-sm font-medium text-slate-200">Weekly Telemetry Digest</p>
                    <p className="text-xs text-slate-500">
                      Get a weekly email summaries of your cluster operations.
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </Card>

          <div className="flex justify-end">
            <Button type="submit" isLoading={isLoading} className="px-8" data-testid="save-profile-btn">
              Save Settings
            </Button>
          </div>
        </form>

        {/* Success Dialog Modal */}
        <AnimatePresence>
          {successData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm z-50"
              data-testid="success-modal"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl space-y-4"
              >
                <div className="flex items-center gap-3 border-b border-slate-800 pb-3 mb-2">
                  <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full">
                    <Check className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Profile Updated</h3>
                    <p className="text-xs text-slate-500">Settings successfully written to profile DB</p>
                  </div>
                </div>

                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto max-h-60">
                  <pre>{JSON.stringify(successData, null, 2)}</pre>
                </div>

                <div className="flex justify-end pt-2">
                  <Button size="sm" onClick={() => setSuccessData(null)}>
                    Dismiss
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
