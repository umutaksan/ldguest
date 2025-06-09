import { Redirect } from 'expo-router';

export default function OldTownLocationRedirect() {
  return <Redirect href="/location?property=old-town" />;
}