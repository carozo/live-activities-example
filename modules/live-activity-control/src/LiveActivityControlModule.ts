import { Platform, requireNativeModule } from 'expo-modules-core'

const fallback = {
  areActivitiesEnabled: () => false,
  endActivity(_title: string, _headline: string, _widgetUrl: string) {},
  startActivity(
    _startTime: number,
    _endTime: number,
    _title: string,
    _headline: string,
    _widgetUrl: string,
  ) {
    return false
  },
}

export default Platform.OS === 'ios'
  ? requireNativeModule('LiveActivityControl')
  : fallback
