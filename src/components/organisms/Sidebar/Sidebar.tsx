import React = require('react')
import App, { AppState } from '../../../App'
import { Selector, Button } from '../..'
import * as s from './Sidebar.css'
import { DurationOption, DateOption, ComparisonOption, MedicineSubcategoryName, RegionOption, StoreFormatOption, CustomerSegmentOption } from '../../../sharedTypes'
import { durationOptions, getDatesOptions, getComparisonOptions, medicineSubcategories, regionOptions, storeFormatOptions, customerSegmentOptions } from '../../../data'

const Sidebar: React.StatelessComponent<{
      appState: AppState
      setAppState: typeof App.prototype.setState      
}> = ({
      appState: {
            selectedFilters,
            dataViewNeedsUpdating,
      },
      setAppState,
}) => (
      <div
            className={s.Sidebar}
      >
            <div
                  className={s.title}
            >
                  Configure view
            </div>

            <div
                  className={s.selectorGroupContainer}
            >
                  <div
                        className={s.selectorGroupTitle}
                  >
                        Analysis period
                  </div>

                  <div
                        className={s.selectorContainer}
                  >
                        <Selector
                              optionsArray={durationOptions}
                              value={selectedFilters.duration}
                              handleSelectorChange={
                                    (newlySelectedDuration: DurationOption) => {
                                          setAppState(
                                                (prevState: AppState) => ({
                                                      selectedFilters: {
                                                            ...prevState.selectedFilters,
                                                            duration: newlySelectedDuration,
                                                            comparison: getComparisonOptions(newlySelectedDuration)[0]
                                                      },
                                                      dataViewNeedsUpdating: true,
                                                })
                                          )
                                    }
                              }
                        />
                  </div>

                  <div
                        className={s.selectorContainer}
                  >
                        <Selector
                              optionsArray={getDatesOptions(selectedFilters.duration)}
                              value={selectedFilters.dates}
                              handleSelectorChange={
                                    (newlySelectedDates: DateOption) => {
                                          setAppState(
                                                (prevState: AppState) => ({
                                                      selectedFilters: {
                                                            ...prevState.selectedFilters,
                                                            dates: newlySelectedDates
                                                      },
                                                      dataViewNeedsUpdating: true,
                                                })
                                          )
                                    }
                              }
                        />
                  </div>

                  <div
                        className={s.selectorContainer}
                  >
                        <Selector
                              optionsArray={getComparisonOptions(selectedFilters.duration)}
                              value={selectedFilters.comparison}
                              handleSelectorChange={
                                    (newlySelectedComparison: ComparisonOption) => {
                                          setAppState(
                                                (prevState: AppState) => ({
                                                      selectedFilters: {
                                                            ...prevState.selectedFilters,
                                                            comparison: newlySelectedComparison,
                                                      },
                                                      dataViewNeedsUpdating: true,
                                                })
                                          )
                                    }
                              }
                        />
                  </div>
            </div>

            <div
                  className={s.selectorGroupContainer}
            >
                  <div
                        className={s.selectorGroupTitle}
                  >
                              Data source
                  </div>

                  <form
                        className={s.radiosAndLabels}
                  >
                              <input
                                    type='radio'
                                    id='dataSourceChoice1'
                                    name='dataSource'
                                    value='All data'
                                    defaultChecked
                              />
                              
                              <label
                                    htmlFor='dataSourceChoice1'
                              >
                                    All data
                              </label>

                              <input
                                    type='radio'
                                    id='dataSourceChoice2'
                                    name='dataSource'
                                    value='Loyalty Card'
                              />
                              
                              <label
                                    htmlFor='dataSourceChoice2'
                              >
                                    Loyalty Card (LC)
                              </label>
                  </form>
            </div>

            <div
                  className={s.selectorGroupContainer}
            >
                  <div
                        className={s.selectorGroupTitle}
                  >
                              Data filters
                  </div>

                  <div
                        className={s.selectorContainer}
                  >
                        <Selector
                              optionsArray={Object.keys(medicineSubcategories)}
                              value={selectedFilters.subcategory}
                              handleSelectorChange={
                                    (newlySelectedSubcategory: MedicineSubcategoryName) => {
                                          setAppState(
                                                (prevState: AppState) => ({
                                                      selectedFilters: {
                                                            ...prevState.selectedFilters,
                                                            subcategory: newlySelectedSubcategory,
                                                      },
                                                      dataViewNeedsUpdating: true,
                                                })
                                          )
                                    }
                              }
                        />
                  </div>

                  <div
                        className={s.selectorContainer}
                  >
                        <Selector
                              optionsArray={regionOptions}
                              value={selectedFilters.region}
                              handleSelectorChange={
                                    (newlySelectedRegion: RegionOption) => {
                                          setAppState(
                                                (prevState: AppState) => ({
                                                      selectedFilters: {
                                                            ...prevState.selectedFilters,
                                                            region: newlySelectedRegion,
                                                      },
                                                      dataViewNeedsUpdating: true,
                                                })
                                          )
                                    }
                              }
                        />
                  </div>

                  <div
                        className={s.selectorContainer}
                  >
                        <Selector
                              optionsArray={storeFormatOptions}
                              value={selectedFilters.storeFormat}
                              handleSelectorChange={
                                    (newlySelectedStoreFormat: StoreFormatOption) => {
                                          setAppState(
                                                (prevState: AppState) => ({
                                                      selectedFilters: {
                                                            ...prevState.selectedFilters,
                                                            storeFormat: newlySelectedStoreFormat,
                                                      },
                                                      dataViewNeedsUpdating: true,
                                                })
                                          )
                                    }
                              }
                        />
                  </div>

                  <div
                        className={s.selectorContainer}
                  >
                        <Selector
                              optionsArray={customerSegmentOptions}
                              value={selectedFilters.customerSegment}
                              handleSelectorChange={
                                    (newlySelectedCustomerSegment: CustomerSegmentOption) => {
                                          setAppState(
                                                (prevState: AppState) => ({
                                                      selectedFilters: {
                                                            ...prevState.selectedFilters,
                                                            customerSegment: newlySelectedCustomerSegment,
                                                      },
                                                      dataViewNeedsUpdating: true,
                                                })
                                          )
                                    }
                              }
                        />
                  </div>
            </div>

            <Button
                  fullWidth
                  disabled={!dataViewNeedsUpdating}
                  handleButtonClick={
                        () => {
                              setAppState(
                                    (prevState: AppState) => ({
                                          displayedFilters: prevState.selectedFilters,
                                          dataViewNeedsUpdating: false,
                                    })
                              )
                        }
                  }
            >
                        Update view
            </Button>
      </div>
)

export { Sidebar }
