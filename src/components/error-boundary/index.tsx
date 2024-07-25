'use client';
import { NextIntlClientProvider } from 'next-intl';
import { Component, ErrorInfo, ReactNode } from 'react';

import { PageLayout } from '@/components/layout/page';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <NextIntlClientProvider>
          <PageLayout>something went wrong</PageLayout>
        </NextIntlClientProvider>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
